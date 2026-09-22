import { Character } from './character.api-model';
import { getWithRetry } from '#common/http';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  return getWithRetry<Character>(`${baseUrl}/${id}`);
};
