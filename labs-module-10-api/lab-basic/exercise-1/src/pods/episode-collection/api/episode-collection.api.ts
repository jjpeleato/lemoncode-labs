import { EpisodeListResponse } from './episode-collection.api-model';
import { episodeApiUrl, getWithRetry } from '#common/http';

export const getEpisodeList = async (
  page: number = 1
): Promise<EpisodeListResponse> =>
  getWithRetry<EpisodeListResponse>(episodeApiUrl, { params: { page } });
