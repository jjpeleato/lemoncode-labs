import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/ConfirmationDialogComponent', () => {
  const createDefaultProps = () => ({
    onAccept: vi.fn(),
    onClose: vi.fn(),
    title: 'test title',
    labels: {
      closeButton: 'test close label',
      acceptButton: 'test accept label',
    },
    children: <p>test children content</p>,
  });

  it('should not render dialog content when isOpen is false', () => {
    // Arrange
    const props = {
      ...createDefaultProps(),
      isOpen: false,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render title, children and button labels when isOpen is true', () => {
    // Arrange
    const props = {
      ...createDefaultProps(),
      isOpen: true,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText('test children content')).toBeInTheDocument();
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
  });

  it('should call onClose but not onAccept when clicking the close button', () => {
    // Arrange
    const props = {
      ...createDefaultProps(),
      isOpen: true,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);
    fireEvent.click(getByText(props.labels.closeButton));

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1);
    expect(props.onAccept).not.toHaveBeenCalled();
  });

  it('should call onAccept and onClose when clicking the accept button', () => {
    // Arrange
    const props = {
      ...createDefaultProps(),
      isOpen: true,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);
    fireEvent.click(getByText(props.labels.acceptButton));

    // Assert
    expect(props.onAccept).toHaveBeenCalledTimes(1);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
