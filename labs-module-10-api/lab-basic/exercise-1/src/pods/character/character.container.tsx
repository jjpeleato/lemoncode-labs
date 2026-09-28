import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { isRemoteApi } from '#common/http';
import { mapIdsFromUrls, mapToCollection } from '#common/mappers';
import { getCharacter, getEpisodes, saveBestSentence } from './api';
import {
  createEmptyCharacter,
  Character,
  CharacterEpisode,
} from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapEpisodeFromApiToVm,
} from './character.mappers';
import { CharacterComponent, SaveStatus } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [episodes, setEpisodes] = React.useState<CharacterEpisode[]>([]);
  const [error, setError] = React.useState(false);
  const [episodesError, setEpisodesError] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<SaveStatus>('idle');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadEpisodes = async (episodeUrls: string[]) => {
    setEpisodesError(false);
    try {
      const apiEpisodes = await getEpisodes(mapIdsFromUrls(episodeUrls));
      setEpisodes(mapToCollection(apiEpisodes, mapEpisodeFromApiToVm));
    } catch {
      setEpisodesError(true);
    }
  };

  const handleLoadCharacter = async () => {
    setError(false);
    try {
      const apiCharacter = await getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
      handleLoadEpisodes(apiCharacter.episode);
    } catch {
      setError(true);
    }
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, [id]);

  const handleSave = async (bestSentence: string) => {
    setSaveStatus('idle');
    try {
      const success = await saveBestSentence(id, bestSentence);
      if (success) {
        setCharacter({ ...character, bestSentence });
      }
      setSaveStatus(success ? 'saved' : 'error');
    } catch {
      setSaveStatus('error');
    }
  };

  const handleViewEpisode = (episodeId: string) => {
    navigate(linkRoutes.episode(episodeId));
  };

  return (
    <CharacterComponent
      character={character}
      episodes={episodes}
      episodesError={episodesError}
      error={error}
      editable={!isRemoteApi}
      saveStatus={saveStatus}
      onSave={handleSave}
      onViewEpisode={handleViewEpisode}
    />
  );
};
