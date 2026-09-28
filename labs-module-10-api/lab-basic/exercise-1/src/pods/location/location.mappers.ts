import * as apiModel from './api/location.api-model';
import * as viewModel from './location.vm';

const mapResidentFromApiToVm = (
  resident: apiModel.Resident
): viewModel.Resident => ({
  id: String(resident.id),
  name: resident.name,
  image: resident.image,
});

export const mapLocationFromApiToVm = (
  location: apiModel.Location,
  residents: apiModel.Resident[]
): viewModel.Location => ({
  id: String(location.id),
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: residents.map(mapResidentFromApiToVm),
});
