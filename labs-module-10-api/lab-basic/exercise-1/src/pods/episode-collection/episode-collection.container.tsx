import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, pageCount, error, loadEpisodeCollection } =
    useEpisodeCollection();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get('page')) || 1;

  React.useEffect(() => {
    loadEpisodeCollection(page);
  }, [page]);

  const handleView = (id: string) => {
    navigate(linkRoutes.episode(id));
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: String(value) });
  };

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      onView={handleView}
      page={page}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      error={error}
    />
  );
};
