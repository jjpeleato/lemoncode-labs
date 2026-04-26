export const ROUTES = {
  HOME: "/",
  CHARACTER: "/character/:id",
} as const;

export const buildCharacterDetailRoute = (id: number): string => {
  return `/character/${id}`;
};
