export const mapIdsFromUrls = (urls: string[]): string[] =>
  urls.map((url) => url.split('/').pop());
