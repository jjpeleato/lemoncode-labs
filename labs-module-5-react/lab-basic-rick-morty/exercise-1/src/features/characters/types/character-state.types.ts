import type { Character } from "./character-api.types";

export interface CharactersState {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasSearched: boolean;
}

export interface CharacterState {
  character: Character | null;
  isLoading: boolean;
  error: string | null;
}

export interface CharactersSearchParams {
  name: string;
  page: number;
}
