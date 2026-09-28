export interface EpisodeCharacter {
  id: string;
  name: string;
  image: string;
}

export interface Episode {
  id: string;
  code: string;
  name: string;
  airDate: string;
  characters: EpisodeCharacter[];
}

export const createEmptyEpisode = (): Episode => ({
  id: '',
  code: '',
  name: '',
  airDate: '',
  characters: [],
});
