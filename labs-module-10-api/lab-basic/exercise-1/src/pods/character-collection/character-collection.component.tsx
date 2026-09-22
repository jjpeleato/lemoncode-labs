import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onView: (id: string) => void;
  page: number;
  pageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView, page, pageCount, onPageChange } =
    props;

  return (
    <>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onView={onView} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          className={classes.pagination}
          color="primary"
          count={pageCount}
          page={page}
          onChange={onPageChange}
        />
      )}
    </>
  );
};
