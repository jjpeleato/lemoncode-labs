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

  const initialName = useRef(nameFromUrl);
  const initialPage = useRef(pageFromUrl);
  const lastSearchedName = useRef(nameFromUrl);
  const setSearchParamsRef = useRef(setSearchParams);
  const isMounting = useRef(true);

  const [inputValue, setInputValue] = useState<string>(nameFromUrl);
  const debouncedName = useDebounce(inputValue, 500);

  const [state, setState] = useState<CharactersState>({
    characters: [],
    isLoading: false,
    error: null,
    currentPage: pageFromUrl,
    totalPages: 1,
    totalCount: 0,
    hasSearched: false,
  });

  const fetchCharacters = useCallback(async (name: string, page: number) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const apiResponse: ApiResponse = await getCharacters({ name, page });
      const { info, results } = apiResponse;

      setState({
        characters: results,
        isLoading: false,
        error: null,
        currentPage: page,
        totalPages: info.pages,
        totalCount: info.count,
        hasSearched: true,
      });
    } catch (err) {
      setState({
        characters: [],
        isLoading: false,
        error: err instanceof Error ? err.message : "Unknown error",
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        hasSearched: true,
      });
    }
  }, []);

  useEffect(() => {
    fetchCharacters(initialName.current, initialPage.current);
    const timer = setTimeout(() => {
      isMounting.current = false;
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchCharacters]);

  useEffect(() => {
    setSearchParamsRef.current = setSearchParams;
  }, [setSearchParams]);

  useEffect(() => {
    const search = async () => {
      if (isMounting.current) return;

      if (!debouncedName.trim()) {
        setSearchParamsRef.current({});
        await fetchCharacters("", 1);
        return;
      }

      if (debouncedName === lastSearchedName.current) return;

      lastSearchedName.current = debouncedName;
      setSearchParamsRef.current({ name: debouncedName, page: "1" });
      await fetchCharacters(debouncedName, 1);
    };

    search();
  }, [debouncedName, fetchCharacters]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    lastSearchedName.current = inputValue;
    setSearchParams({ name: inputValue, page: "1" });
    fetchCharacters(inputValue, 1);
  };

  const handlePageChange = (page: number) => {
    if (!inputValue.trim()) {
      setSearchParams({ page: String(page) });
      fetchCharacters("", page);
      return;
    }
    setSearchParams({ name: inputValue, page: String(page) });
    fetchCharacters(inputValue, page);
  };

  const handleReset = () => {
    lastSearchedName.current = "";
    setInputValue("");
    setSearchParams({});
    fetchCharacters("", 1);
  };

  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalCount: state.totalCount,
    hasSearched: state.hasSearched,
    inputValue,
    handleInputChange,
    handleSearch,
    handlePageChange,
    handleReset,
  };
};
