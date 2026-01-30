export const head = <T>(array: readonly T[]): T | undefined => {
  const [first] = array;
  return first;
};
