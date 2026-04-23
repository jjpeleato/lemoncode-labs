import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getOrgMembers } from "../services/github.service";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import type { OrgMembersState } from "../types/github-state.types";
import type { GithubMember } from "../types/github-api.types";

const PER_PAGE = 12;

export const useOrgMembers = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orgFromUrl = searchParams.get("org") ?? "";
  const pageFromUrl = Number(searchParams.get("page") ?? "1");

  const initialOrg = useRef(orgFromUrl);
  const initialPage = useRef(pageFromUrl);

  const lastSuccessfulData = useRef<{
    page: number;
    members: GithubMember[];
  } | null>(null);
  const lastSearchedOrg = useRef(initialOrg.current);
  const setSearchParamsRef = useRef(setSearchParams);

  const [inputValue, setInputValue] = useState<string>(initialOrg.current);
  const debouncedOrg = useDebounce(inputValue, 500);

  const [state, setState] = useState<OrgMembersState>({
    members: [],
    isLoading: false,
    error: null,
    totalPages: 1,
    currentPage: initialPage.current,
  });

  const fetchMembers = useCallback(async (org: string, page: number) => {
    if (!org.trim()) return;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const members: GithubMember[] = await getOrgMembers({
        org,
        page,
        perPage: PER_PAGE,
      });

      if (members.length === 0 && page > 1) {
        const previousPage = page - 1;
        const previousMembers =
          lastSuccessfulData.current?.page === previousPage
            ? lastSuccessfulData.current.members
            : await getOrgMembers({
                org,
                page: previousPage,
                perPage: PER_PAGE,
              });

        setState((prev) => ({
          ...prev,
          members: previousMembers,
          isLoading: false,
          currentPage: previousPage,
          totalPages: previousPage,
        }));

        return;
      }

      lastSuccessfulData.current = { page, members };
      setState((prev) => ({
        ...prev,
        members,
        isLoading: false,
        currentPage: page,
        totalPages: members.length < PER_PAGE ? page : page + 1,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Unknown error",
        members: [],
        totalPages: 1,
        currentPage: 1,
      }));
    }
  }, []);

  useEffect(() => {
    if (initialOrg.current) {
      fetchMembers(initialOrg.current, initialPage.current);
    }
  }, [fetchMembers]);

  useEffect(() => {
    setSearchParamsRef.current = setSearchParams;
  }, [setSearchParams]);

  useEffect(() => {
    if (!debouncedOrg.trim()) return;
    if (debouncedOrg === lastSearchedOrg.current) return;

    lastSearchedOrg.current = debouncedOrg;
    setSearchParamsRef.current({ org: debouncedOrg, page: "1" });
    fetchMembers(debouncedOrg, 1);
  }, [debouncedOrg, fetchMembers]);

  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (value.trim() === "") {
      lastSearchedOrg.current = "";
      setState({
        members: [],
        isLoading: false,
        error: null,
        totalPages: 1,
        currentPage: 1,
      });
    }
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    lastSearchedOrg.current = inputValue;
    setSearchParams({ org: inputValue, page: "1" });
    fetchMembers(inputValue, 1);
  };

  const handlePageChange = (page: number) => {
    if (!inputValue.trim()) return;
    setSearchParams({ org: inputValue, page: String(page) });
    fetchMembers(inputValue, page);
  };

  const handleReset = () => {
    setInputValue("");
    lastSearchedOrg.current = "";
    lastSuccessfulData.current = null;
    setSearchParams({});
    setState({
      members: [],
      isLoading: false,
      error: null,
      totalPages: 1,
      currentPage: 1,
    });
  };

  return {
    inputValue,
    members: state.members,
    isLoading: state.isLoading,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    handleInputChange,
    handleSearch,
    handlePageChange,
    handleReset,
  };
};
