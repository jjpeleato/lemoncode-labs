import { useCallback, useEffect, useRef } from "react";
import { useCharactersQuery } from "./useCharactersQuery";
import { useCharactersSearch } from "./useCharactersSearch";
import { useCharactersUrlSync } from "./useCharactersUrlSync";

export const useCharacters = () => {
  const { nameFromUrl, pageFromUrl, setSearchParams } = useCharactersUrlSync();
  const { inputValue, setInputValue, debouncedName, handleInputChange } =
    useCharactersSearch(nameFromUrl);
  const {
    characters,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalCount,
    refetch,
  } = useCharactersQuery(nameFromUrl, pageFromUrl);

  const lastFetchedName = useRef(nameFromUrl);
  const lastUrlRef = useRef({ name: nameFromUrl, page: pageFromUrl });

  const commitSearch = useCallback(
    (name: string, page: number) => {
      const trimmed = name.trim();
      lastFetchedName.current = trimmed;
      lastUrlRef.current = { name: trimmed, page };
      setSearchParams(trimmed ? { name: trimmed, page: String(page) } : {});
      refetch(trimmed, page);
    },
    [refetch, setSearchParams],
  );

  useEffect(() => {
    if (debouncedName.trim() === lastFetchedName.current) return;
    commitSearch(debouncedName, 1);
  }, [debouncedName, commitSearch]);

  useEffect(() => {
    const { name: prevName, page: prevPage } = lastUrlRef.current;
    if (nameFromUrl === prevName && pageFromUrl === prevPage) return;
    lastUrlRef.current = { name: nameFromUrl, page: pageFromUrl };
    setInputValue(nameFromUrl);
    lastFetchedName.current = nameFromUrl;
    refetch(nameFromUrl, pageFromUrl);
  }, [nameFromUrl, pageFromUrl, setInputValue, refetch]);

  const handleSearch = useCallback(() => {
    if (!inputValue.trim()) return;
    commitSearch(inputValue, 1);
  }, [inputValue, commitSearch]);

  const handlePageChange = useCallback(
    (page: number) => {
      lastUrlRef.current = { name: nameFromUrl, page };
      setSearchParams(nameFromUrl ? { name: nameFromUrl, page: String(page) } : { page: String(page) });
      refetch(nameFromUrl, page);
    },
    [nameFromUrl, refetch, setSearchParams],
  );

  const handleReset = useCallback(() => {
    setInputValue("");
    commitSearch("", 1);
  }, [setInputValue, commitSearch]);

  return {
    characters,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalCount,
    inputValue,
    handleInputChange,
    handleSearch,
    handlePageChange,
    handleReset,
  };
};
