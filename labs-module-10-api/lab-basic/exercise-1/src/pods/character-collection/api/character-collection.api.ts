import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterList = async (
  page: number = 1
): Promise<CharacterListResponse> => {
  const { data } = await axios.get<CharacterListResponse>(baseUrl, {
    params: { page },
  });
  return data;
};
