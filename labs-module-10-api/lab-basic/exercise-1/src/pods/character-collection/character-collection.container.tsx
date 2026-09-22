import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useDebounce } from '#common/hooks';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, pageCount, error, loadCharacterCollection } =
    useCharacterCollection();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get('page')) || 1;
  const name = searchParams.get('name') ?? '';

  const [search, setSearch] = React.useState(name);
  const debouncedSearch = useDebounce(search, 300);

  React.useEffect(() => {
    loadCharacterCollection(page, name);
  }, [page, name]);

  const commitSearch = (value: string) => {
    const params: Record<string, string> = { page: '1' };
    if (value) {
      params.name = value;
    }
    setSearchParams(params);
  };

  React.useEffect(() => {
    if (debouncedSearch === name) {
      return;
    }
    commitSearch(debouncedSearch);
  }, [debouncedSearch]);

  const handleView = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    commitSearch(search);
  };

  const handleClear = () => {
    setSearch('');
    commitSearch('');
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params: Record<string, string> = { page: String(value) };
    if (name) {
      params.name = name;
    }
    setSearchParams(params);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onView={handleView}
      page={page}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      error={error}
      search={search}
      onSearch={setSearch}
      onSubmit={handleSubmit}
      onClear={handleClear}
    />
  );
};
