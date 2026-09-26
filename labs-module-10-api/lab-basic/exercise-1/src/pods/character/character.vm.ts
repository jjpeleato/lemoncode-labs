export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  episodeCount: number;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  status: '',
  species: '',
  gender: '',
  origin: '',
  location: '',
  episodeCount: 0,
  bestSentence: '',
});
