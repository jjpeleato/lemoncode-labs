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
    fetchCharacters,
  } = useCharactersQuery(nameFromUrl, pageFromUrl);

  const lastFetchedName = useRef(nameFromUrl);

  useEffect(() => {
    if (debouncedName === lastFetchedName.current) return;

    lastFetchedName.current = debouncedName;
    setSearchParams(debouncedName ? { name: debouncedName, page: "1" } : {});
    fetchCharacters(debouncedName, 1);
  }, [debouncedName, fetchCharacters, setSearchParams]);

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
  }, [fetchCharacters, setInputValue, setSearchParams]);

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
