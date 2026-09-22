import { CharacterListResponse } from './character-collection.api-model';
import { getWithRetry } from '#common/http';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterList = async (
  page: number = 1
): Promise<CharacterListResponse> => {
  return getWithRetry<CharacterListResponse>(baseUrl, { params: { page } });
};
