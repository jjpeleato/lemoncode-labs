import { Episode, EpisodeCharacter } from './episode.api-model';
import {
  episodeApiUrl,
  getByIds,
  getWithRetry,
  remoteCharacterApiUrl,
} from '#common/http';

export const getEpisode = async (id: string): Promise<Episode> =>
  getWithRetry<Episode>(`${episodeApiUrl}/${id}`);

export const getEpisodeCharacters = async (
  ids: string[]
): Promise<EpisodeCharacter[]> =>
  getByIds<EpisodeCharacter>(remoteCharacterApiUrl, ids);
