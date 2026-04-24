import type { ApiResponse, Character } from "../types/character-api.types";
import type { CharactersSearchParams } from "../types/character-state.types";

const RICK_AND_MORTY_API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (
  params: CharactersSearchParams,
): Promise<ApiResponse> => {
  const { name, page } = params;
  const url = new URL(`${RICK_AND_MORTY_API_BASE_URL}/character`);
  url.searchParams.set("page", String(page));
  if (name.trim()) url.searchParams.set("name", name.trim());

  const response = await fetch(url.toString());

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No characters with that name were found.");
    }
    throw new Error(`Failed to fetch characters (${response.status})`);
  }

  const data: ApiResponse = await response.json();
  return data;
};

export const getCharacter = async (id: number): Promise<Character> => {
  const url = `${RICK_AND_MORTY_API_BASE_URL}/character/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch character with id ${id}`);
  }

  const data: Character = await response.json();
  return data;
};
