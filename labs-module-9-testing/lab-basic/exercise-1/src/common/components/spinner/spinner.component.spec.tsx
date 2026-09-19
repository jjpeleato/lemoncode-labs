import * as React from 'react';
import { render } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';
import * as classes from './spinner.styles';

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

describe('common/components/SpinnerComponent', () => {
  it('should not render the loader when there is no promise in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(
      document.querySelector(`.${classes.loaderContainer}`)
    ).not.toBeInTheDocument();
  });

  it('should render the loader when there is a promise in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(document.querySelector(`.${classes.loaderContainer}`)).toBeInTheDocument();
  });
});
