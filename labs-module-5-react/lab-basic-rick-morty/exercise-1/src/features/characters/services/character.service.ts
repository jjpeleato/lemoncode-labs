import type { ApiResponse, Character } from "../types/character-api.types";
import type { CharactersSearchParams } from "../types/character-state.types";

const RICK_AND_MORTY_API_BASE_URL = "https://rickandmortyapi.com/api";
const REQUEST_TIMEOUT_MS = 10_000;

const buildSignal = (signal?: AbortSignal): AbortSignal =>
  signal
    ? AbortSignal.any([signal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)])
    : AbortSignal.timeout(REQUEST_TIMEOUT_MS);

export const getCharacters = async (
  params: CharactersSearchParams,
  signal?: AbortSignal,
): Promise<ApiResponse> => {
  const { name, page } = params;
  const url = new URL(`${RICK_AND_MORTY_API_BASE_URL}/character`);

  url.searchParams.set("page", String(page));
  if (name.trim()) url.searchParams.set("name", name.trim());

  const response = await fetch(url.toString(), { signal: buildSignal(signal) });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Ups! We haven't found any characters");
    }

    throw new Error(`Failed to fetch characters (${response.status})`);
  }

  const data: ApiResponse = await response.json();
  return data;
};

export const getCharacter = async (
  id: number,
  signal?: AbortSignal,
): Promise<Character> => {
  const url = `${RICK_AND_MORTY_API_BASE_URL}/character/${id}`;

  const response = await fetch(url, { signal: buildSignal(signal) });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Character with id ${id} not found`);
    }

    throw new Error(`Failed to fetch character (${response.status})`);
  }

  const data: Character = await response.json();
  return data;
};
