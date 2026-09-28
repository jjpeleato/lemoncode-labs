import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';
import { characterApiUrl, getWithRetry } from '#common/http';

const emptyResponse: CharacterListResponse = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const getCharacterList = async (
  page: number = 1,
  name?: string
): Promise<CharacterListResponse> => {
  try {
    return await getWithRetry<CharacterListResponse>(characterApiUrl, {
      params: { page, name: name || undefined },
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return emptyResponse;
    }
    throw error;
  }
};
