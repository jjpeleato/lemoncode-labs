import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeList } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);
  const [pageCount, setPageCount] = React.useState(1);
  const [error, setError] = React.useState(false);

  const loadEpisodeCollection = (page: number) => {
    setError(false);
    getEpisodeList(page)
      .then((result) => {
        setEpisodeCollection(mapToCollection(result.results, mapFromApiToVm));
        setPageCount(result.info.pages);
      })
      .catch(() => setError(true));
  };

  return { episodeCollection, pageCount, error, loadEpisodeCollection };
};
