import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, pageCount, loadCharacterCollection } =
    useCharacterCollection();
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page);
  }, [page]);

  const handleView = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onView={handleView}
      page={page}
      pageCount={pageCount}
      onPageChange={handlePageChange}
    />
  );
};
