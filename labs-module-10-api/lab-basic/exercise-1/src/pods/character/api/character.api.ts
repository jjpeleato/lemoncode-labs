import axios from 'axios';
import { Character } from './character.api-model';
import { characterApiUrl, getWithRetry } from '#common/http';

export const getCharacter = async (id: string): Promise<Character> => {
  return getWithRetry<Character>(`${characterApiUrl}/${id}`);
};

export const saveBestSentence = async (
  id: string,
  bestSentence: string
): Promise<boolean> => {
  const { status } = await axios.put(`${characterApiUrl}/${id}`, {
    bestSentence,
  });
  return status === 204;
};
