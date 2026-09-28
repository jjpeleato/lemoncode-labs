import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
  error: boolean;
  searchable: boolean;
  search: string;
  onSearch: (value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
  onClear: () => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onView,
    page,
    pageCount,
    onPageChange,
    error,
    searchable,
    search,
    onSearch,
    onSubmit,
    onClear,
  } = props;

  return (
    <>
      {searchable && (
        <form className={classes.searchForm} onSubmit={onSubmit}>
          <TextField
            className={classes.searchField}
            label="Search by name"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={onClear}
            disabled={!search}
          >
            Clear
          </Button>
        </form>
      )}

      {error && <p>Could not load characters. Please try again.</p>}

      {!error && characterCollection.length === 0 && (
        <p>No characters found.</p>
      )}

      {!error && characterCollection.length > 0 && (
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
      )}
    </>
  );
};
