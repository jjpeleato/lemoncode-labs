import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

const mapCharacterFromApiToVm = (
  character: apiModel.EpisodeCharacter
): viewModel.EpisodeCharacter => ({
  id: String(character.id),
  name: character.name,
  image: character.image,
});

export const mapEpisodeFromApiToVm = (
  episode: apiModel.Episode,
  characters: apiModel.EpisodeCharacter[]
): viewModel.Episode => ({
  id: String(episode.id),
  code: episode.episode,
  name: episode.name,
  airDate: episode.air_date,
  characters: characters.map(mapCharacterFromApiToVm),
});
