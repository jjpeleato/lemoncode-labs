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
      }));
    }
  }, []);

  useEffect(() => {
    if (initialOrg.current) {
      fetchMembers(initialOrg.current, initialPage.current);
    }
  }, [fetchMembers]);

  useEffect(() => {
    if (!debouncedOrg.trim()) return;
    if (debouncedOrg === initialOrg.current) return;

    setSearchParams({ org: debouncedOrg, page: "1" });
    fetchMembers(debouncedOrg, 1);
  }, [debouncedOrg, fetchMembers, setSearchParams]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;

    setSearchParams({ org: inputValue, page: "1" });
    fetchMembers(inputValue, 1);
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ org: orgFromUrl, page: String(page) });
    fetchMembers(orgFromUrl, page);
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
  };
};
