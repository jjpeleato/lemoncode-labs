export const tail = <T>(array: readonly T[]): readonly T[] => {
	const [, ...rest] = array;
	return rest;
};
