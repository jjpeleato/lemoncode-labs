export interface Resident {
  id: string;
  name: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
}

export const createEmptyLocation = (): Location => ({
  id: '',
  name: '',
  type: '',
  dimension: '',
  residents: [],
});
