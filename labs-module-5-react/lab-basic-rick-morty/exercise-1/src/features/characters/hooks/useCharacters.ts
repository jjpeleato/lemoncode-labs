import { getCharacters } from "../services/character.service";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "@shared";
import { useSearchParams } from "react-router-dom";
import type { ApiResponse } from "../types/character-api.types";
import type { CharactersState } from "../types/character-state.types";

export const useCharacters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFromUrl = searchParams.get("name") ?? "";
  const pageFromUrl = Number(searchParams.get("page") ?? "1");

  const [inputValue, setInputValue] = useState(nameFromUrl);
  const debouncedName = useDebounce(inputValue, 500);

  const abortRef = useRef<AbortController | null>(null);
  const initialParams = useRef({ name: nameFromUrl, page: pageFromUrl });
  const lastFetchedName = useRef(nameFromUrl);

  const [state, setState] = useState<CharactersState>({
    characters: [],
    isLoading: false,
    error: null,
    currentPage: pageFromUrl,
    totalPages: 1,
    totalCount: 0,
  });

  const fetchCharacters = useCallback(async (name: string, page: number) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const apiResponse: ApiResponse = await getCharacters(
        { name, page },
        controller.signal,
      );
      const { info, results } = apiResponse;
      setState({
        characters: results,
        isLoading: false,
        error: null,
        currentPage: page,
        totalPages: info.pages,
        totalCount: info.count,
      });
    } catch (err) {
      if (controller.signal.aborted) return;
      setState({
        characters: [],
        isLoading: false,
        error: err instanceof Error ? err.message : "Unknown error",
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    fetchCharacters(initialParams.current.name, initialParams.current.page);
  }, [fetchCharacters]);

  useEffect(() => {
    if (debouncedName === lastFetchedName.current) return;
    lastFetchedName.current = debouncedName;
    setSearchParams(debouncedName ? { name: debouncedName, page: "1" } : {});
    fetchCharacters(debouncedName, 1);
  }, [debouncedName, fetchCharacters, setSearchParams]);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleSearch = useCallback(() => {
    if (!inputValue.trim()) return;
    lastFetchedName.current = inputValue;
    setSearchParams({ name: inputValue, page: "1" });
    fetchCharacters(inputValue, 1);
  }, [inputValue, fetchCharacters, setSearchParams]);

  const handlePageChange = useCallback(
    (page: number) => {
      const name = inputValue.trim();
      setSearchParams(
        name ? { name, page: String(page) } : { page: String(page) },
      );
      fetchCharacters(name, page);
    },
    [inputValue, fetchCharacters, setSearchParams],
  );

  const handleReset = useCallback(() => {
    lastFetchedName.current = "";
    setInputValue("");
    setSearchParams({});
    fetchCharacters("", 1);
  }, [fetchCharacters, setSearchParams]);

  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalCount: state.totalCount,
    inputValue,
    handleInputChange,
    handleSearch,
    handlePageChange,
    handleReset,
  };
};
