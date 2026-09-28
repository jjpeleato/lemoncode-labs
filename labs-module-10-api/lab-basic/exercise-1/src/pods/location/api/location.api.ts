import { Location, Resident } from './location.api-model';
import {
  getByIds,
  getWithRetry,
  locationApiUrl,
  remoteCharacterApiUrl,
} from '#common/http';

export const getLocation = async (id: string): Promise<Location> =>
  getWithRetry<Location>(`${locationApiUrl}/${id}`);

export const getResidents = async (ids: string[]): Promise<Resident[]> =>
  getByIds<Resident>(remoteCharacterApiUrl, ids);
