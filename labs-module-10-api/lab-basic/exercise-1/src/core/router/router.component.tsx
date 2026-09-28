import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
  LocationCollectionScene,
  LocationScene,
  EpisodeCollectionScene,
  EpisodeScene,
} from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.character} element={<CharacterScene />} />
        <Route
          path={switchRoutes.locationCollection}
          element={<LocationCollectionScene />}
        />
        <Route path={switchRoutes.location} element={<LocationScene />} />
        <Route
          path={switchRoutes.episodeCollection}
          element={<EpisodeCollectionScene />}
        />
        <Route path={switchRoutes.episode} element={<EpisodeScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
