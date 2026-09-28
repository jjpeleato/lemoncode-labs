import axios from 'axios';
import { Character, Episode } from './character.api-model';
import {
  characterApiUrl,
  episodeApiUrl,
  getByIds,
  getWithRetry,
} from '#common/http';

export const getCharacter = async (id: string): Promise<Character> => {
  return getWithRetry<Character>(`${characterApiUrl}/${id}`);
};

export const getEpisodes = async (ids: string[]): Promise<Episode[]> =>
  getByIds<Episode>(episodeApiUrl, ids);

export const saveBestSentence = async (
  id: string,
  bestSentence: string
): Promise<boolean> => {
  const { status } = await axios.put(`${characterApiUrl}/${id}`, {
    bestSentence,
  });
  return status === 204;
};
