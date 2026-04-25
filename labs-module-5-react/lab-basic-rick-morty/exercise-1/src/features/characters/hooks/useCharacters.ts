import { getCharacters } from "../services/character.service";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import type { ApiResponse } from "../types/character-api.types";
import type { CharactersState } from "../types/character-state.types";

export const useCharacters = () => {
  const [searchParams] = useSearchParams();

  const page = useRef(Number(searchParams.get("page") ?? "1"));

  const [state, setState] = useState<CharactersState>({
    characters: [],
    isLoading: false,
    error: null,
    currentPage: page.current,
    totalPages: 1,
    totalCount: 1,
    hasSearched: false,
  });

  const fetchCharacters = useCallback(async (page: number) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const apiResponse: ApiResponse = await getCharacters({
        name: "",
        page,
      });
      const { info, results } = apiResponse;

      setState(() => ({
        characters: results,
        isLoading: false,
        error: null,
        currentPage: page,
        totalPages: info.pages,
        totalCount: info.count,
        hasSearched: false,
      }));
    } catch (err) {
      setState(() => ({
        characters: [],
        isLoading: false,
        error: err instanceof Error ? err.message : "Unknown error",
        currentPage: 1,
        totalPages: 1,
        totalCount: 1,
        hasSearched: true,
      }));
    }
  }, []);

  useEffect(() => {
    fetchCharacters(page.current);
  }, [fetchCharacters]);

  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalCount: state.totalCount,
    hasSearched: state.hasSearched,
  };
};
