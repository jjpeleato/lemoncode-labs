import { getCharacters } from "../services/character.service";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ApiResponse } from "../types/character-api.types";
import type { CharactersState } from "../types/character-state.types";

export const useCharactersQuery = (
  initialName: string,
  initialPage: number,
) => {
  const abortRef = useRef<AbortController | null>(null);
  const initialParams = useRef({ name: initialName, page: initialPage });

  const [state, setState] = useState<CharactersState>({
    characters: [],
    isLoading: false,
    error: null,
    currentPage: initialPage,
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

  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalCount: state.totalCount,
    fetchCharacters,
  };
};
