export const clone = <T extends object>(source: T): T => {
  return { ...source };
};
