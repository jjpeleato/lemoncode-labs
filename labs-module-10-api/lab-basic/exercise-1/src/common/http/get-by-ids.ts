import { getWithRetry } from './get-with-retry';

export const getByIds = async <T>(
  baseUrl: string,
  ids: string[]
): Promise<T[]> => {
  if (ids.length === 0) {
    return [];
  }
  const data = await getWithRetry<T | T[]>(`${baseUrl}/${ids.join(',')}`);
  // The API returns a single object instead of an array when given one id.
  return Array.isArray(data) ? data : [data];
};
