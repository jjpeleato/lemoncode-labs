export const multiple = <T>(...arrays: readonly (readonly T[])[]): readonly T[] => {
  return arrays.flat() as readonly T[];
};
