const remoteUrl = 'https://rickandmortyapi.com/api/character';
const localUrl = '/api/character';

export const isRemoteApi = import.meta.env.MODE === 'remote';
export const characterApiUrl = isRemoteApi ? remoteUrl : localUrl;
