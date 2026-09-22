import axios from 'axios';
import { Character } from './character.api-model';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${baseUrl}/${id}`);
  return data;
};
