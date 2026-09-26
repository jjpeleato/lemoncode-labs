import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  locationCollection: string;
  location: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/characters/:id',
  locationCollection: '/locations',
  location: '/locations/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'character' | 'location'> {
  character: NavigationFunction;
  location: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id }),
  location: (id) => generatePath(switchRoutes.location, { id }),
};
