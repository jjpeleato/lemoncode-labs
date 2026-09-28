import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  locationCollection: string;
  location: string;
  episodeCollection: string;
  episode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/characters/:id',
  locationCollection: '/locations',
  location: '/locations/:id',
  episodeCollection: '/episodes',
  episode: '/episodes/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<
  SwitchRoutes,
  'character' | 'location' | 'episode'
> {
  character: NavigationFunction;
  location: NavigationFunction;
  episode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id }),
  location: (id) => generatePath(switchRoutes.location, { id }),
  episode: (id) => generatePath(switchRoutes.episode, { id }),
};
