import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { isRemoteApi } from '#common/http';
import { getLocation, getResidents } from './api';
import { createEmptyLocation, Location } from './location.vm';
import { mapIdsFromUrls, mapLocationFromApiToVm } from './location.mappers';
import { LocationComponent } from './location.component';

export const LocationContainer: React.FunctionComponent = () => {
  const [location, setLocation] = React.useState<Location>(
    createEmptyLocation()
  );
  const [error, setError] = React.useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadLocation = async () => {
    setError(false);
    try {
      const apiLocation = await getLocation(id);
      const apiResidents = await getResidents(
        mapIdsFromUrls(apiLocation.residents)
      );
      setLocation(mapLocationFromApiToVm(apiLocation, apiResidents));
    } catch {
      setError(true);
    }
  };

  React.useEffect(() => {
    handleLoadLocation();
  }, [id]);

  const handleViewResident = (residentId: string) => {
    navigate(linkRoutes.character(residentId));
  };

  return (
    <LocationComponent
      location={location}
      error={error}
      linkable={isRemoteApi}
      onViewResident={handleViewResident}
    />
  );
};
