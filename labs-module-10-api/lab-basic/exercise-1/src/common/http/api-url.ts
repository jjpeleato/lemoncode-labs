const remoteBaseUrl = 'https://rickandmortyapi.com/api';

export const isRemoteApi = import.meta.env.MODE === 'remote';
export const characterApiUrl = isRemoteApi
  ? `${remoteBaseUrl}/character`
  : '/api/character';

// The local mock only serves characters, so these always use the public API.
export const remoteCharacterApiUrl = `${remoteBaseUrl}/character`;
export const locationApiUrl = `${remoteBaseUrl}/location`;
