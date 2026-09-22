import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: String(character.id),
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
});
