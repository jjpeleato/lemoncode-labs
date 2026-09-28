import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { isRemoteApi } from '#common/http';
import { mapIdsFromUrls } from '#common/mappers';
import { getEpisode, getEpisodeCharacters } from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { EpisodeComponent } from './episode.component';

export const EpisodeContainer: React.FunctionComponent = () => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const [error, setError] = React.useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadEpisode = async () => {
    setError(false);
    try {
      const apiEpisode = await getEpisode(id);
      const apiCharacters = await getEpisodeCharacters(
        mapIdsFromUrls(apiEpisode.characters)
      );
      setEpisode(mapEpisodeFromApiToVm(apiEpisode, apiCharacters));
    } catch {
      setError(true);
    }
  };

  React.useEffect(() => {
    handleLoadEpisode();
  }, [id]);

  const handleViewCharacter = (characterId: string) => {
    navigate(linkRoutes.character(characterId));
  };

  return (
    <EpisodeComponent
      episode={episode}
      error={error}
      linkable={isRemoteApi}
      onViewCharacter={handleViewCharacter}
    />
  );
};
