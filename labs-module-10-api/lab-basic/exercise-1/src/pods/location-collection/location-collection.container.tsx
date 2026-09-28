import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const { locationCollection, pageCount, error, loadLocationCollection } =
    useLocationCollection();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get('page')) || 1;

  React.useEffect(() => {
    loadLocationCollection(page);
  }, [page]);

  const handleView = (id: string) => {
    navigate(linkRoutes.location(id));
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: String(value) });
  };

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      onView={handleView}
      page={page}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      error={error}
    />
  );
};
