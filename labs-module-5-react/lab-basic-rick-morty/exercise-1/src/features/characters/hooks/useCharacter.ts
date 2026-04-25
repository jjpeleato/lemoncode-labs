import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacter } from "../services/character.service";
import type { CharacterState } from "../types/character-state.types";

export const useCharacter = () => {
  const { id } = useParams<{ id: string }>();
  const [state, setState] = useState<CharacterState>({
    character: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!id) return;
    const numericId = Number(id);

    const fetchDetail = async () => {
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
        const character = await getCharacter(numericId);
        setState({ character, isLoading: false, error: null });
      } catch (err) {
        setState({
          character: null,
          isLoading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    };

    fetchDetail();
  }, [id]);

  return {
    character: state.character,
    isLoading: state.isLoading,
    error: state.error,
    id,
  };
};
