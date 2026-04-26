import { getCharacter } from "../services/character.service";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import type { CharacterState } from "../types/character-state.types";

export const useCharacter = () => {
  const { id } = useParams<{ id: string }>();
  const abortRef = useRef<AbortController | null>(null);

  const [state, setState] = useState<CharacterState>({
    character: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const fetchDetail = async () => {
      const numericId = Number(id);

      if (isNaN(numericId)) {
        setState({
          character: null,
          isLoading: false,
          error: "Invalid character ID",
        });
        return;
      }

      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const character = await getCharacter(
          { id: numericId },
          controller.signal,
        );
        if (controller.signal.aborted) return;
        setState({ character, isLoading: false, error: null });
      } catch (err) {
        if (controller.signal.aborted) return;
        setState({
          character: null,
          isLoading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    };

    fetchDetail();

    return () => {
      controller.abort();
    };
  }, [id]);

  return {
    character: state.character,
    isLoading: state.isLoading,
    error: state.error,
    id,
  };
};
