export const ROUTES = {
  HOME: "/",
  MEMBERS: "/members",
  MEMBER_DETAIL: "/members/:username",
} as const;

export const buildMemberDetailRoute = (username: string): string => {
  return `/members/${username}`;
};
