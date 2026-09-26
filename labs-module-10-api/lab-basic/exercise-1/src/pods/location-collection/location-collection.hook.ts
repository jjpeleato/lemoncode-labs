import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationList } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);
  const [pageCount, setPageCount] = React.useState(1);
  const [error, setError] = React.useState(false);

  const loadLocationCollection = (page: number) => {
    setError(false);
    getLocationList(page)
      .then((result) => {
        setLocationCollection(mapToCollection(result.results, mapFromApiToVm));
        setPageCount(result.info.pages);
      })
      .catch(() => setError(true));
  };

  return { locationCollection, pageCount, error, loadLocationCollection };
};
