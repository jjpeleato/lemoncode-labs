import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mapper', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  const baseProject = {
    id: 'test id',
    name: 'test name',
    externalId: 'test external id',
    comments: 'test comments',
    isActive: true,
  };

  it('should return empty employees array when feeding null employees', () => {
    // Arrange
    const project: apiModel.Project = {
      ...baseProject,
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      ...baseProject,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty employees array when feeding undefined employees', () => {
    // Arrange
    const project: apiModel.Project = {
      ...baseProject,
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      ...baseProject,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project = {
      ...baseProject,
      employees: [
        {
          id: 'test employee id',
          employeeName: 'test employee name',
          isAssigned: true,
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      ...baseProject,
      employees: [
        {
          id: 'test employee id',
          employeeName: 'test employee name',
          isAssigned: true,
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
