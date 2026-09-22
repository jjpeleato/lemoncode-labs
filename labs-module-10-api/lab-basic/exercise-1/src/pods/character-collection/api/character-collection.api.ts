import axios from 'axios';
import { Character, CharacterListResponse } from './character-collection.api-model';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterList = async (): Promise<Character[]> => {
  const { data } = await axios.get<CharacterListResponse>(baseUrl);
  return data.results;
};
