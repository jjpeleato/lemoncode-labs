export const merge = <T extends object, U extends object>(source: T, target: U): T & U => {
  return { ...target, ...source };
};
