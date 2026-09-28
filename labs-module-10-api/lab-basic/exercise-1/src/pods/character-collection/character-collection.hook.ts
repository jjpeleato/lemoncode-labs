import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterList } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pageCount, setPageCount] = React.useState(1);
  const [error, setError] = React.useState(false);

  const loadCharacterCollection = (page: number, name?: string) => {
    setError(false);
    getCharacterList(page, name)
      .then((result) => {
        setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
        setPageCount(result.info.pages ?? 1);
      })
      .catch(() => setError(true));
  };

  return { characterCollection, pageCount, error, loadCharacterCollection };
};
