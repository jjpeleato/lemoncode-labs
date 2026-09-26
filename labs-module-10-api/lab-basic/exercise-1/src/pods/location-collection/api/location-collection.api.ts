import { LocationListResponse } from './location-collection.api-model';
import { getWithRetry, locationApiUrl } from '#common/http';

export const getLocationList = async (
  page: number = 1
): Promise<LocationListResponse> =>
  getWithRetry<LocationListResponse>(locationApiUrl, { params: { page } });
