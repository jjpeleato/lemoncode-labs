import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, pageCount, error, loadCharacterCollection } =
    useCharacterCollection();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page);
  }, [page]);

  const handleView = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: String(value) });
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onView={handleView}
      page={page}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      error={error}
    />
  );
};
