import { Location, Resident } from './location.api-model';
import {
  getWithRetry,
  locationApiUrl,
  remoteCharacterApiUrl,
} from '#common/http';

export const getLocation = async (id: string): Promise<Location> =>
  getWithRetry<Location>(`${locationApiUrl}/${id}`);

export const getResidents = async (ids: string[]): Promise<Resident[]> => {
  if (ids.length === 0) {
    return [];
  }
  const data = await getWithRetry<Resident | Resident[]>(
    `${remoteCharacterApiUrl}/${ids.join(',')}`
  );
  // The API returns a single object instead of an array when given one id.
  return Array.isArray(data) ? data : [data];
};
