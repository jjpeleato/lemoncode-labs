import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: String(character.id),
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  gender: character.gender,
  origin: character.origin.name,
  location: character.location.name,
  episodeCount: character.episode.length,
  bestSentence: character.bestSentence ?? '',
});
