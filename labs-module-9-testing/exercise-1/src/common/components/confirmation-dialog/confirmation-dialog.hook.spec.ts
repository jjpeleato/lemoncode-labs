import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '#common/models';

describe('common/components/confirmation-dialog/useConfirmationDialog', () => {
  it('should return isOpen as false and an empty itemToDelete as initial state', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should set isOpen to true and itemToDelete to the given item when calling onOpenDialog', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: 'test id', name: 'test name' };

    // Act
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should set isOpen to false without touching itemToDelete when calling onClose', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: 'test id', name: 'test name' };

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should reset itemToDelete without touching isOpen when calling onAccept', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: 'test id', name: 'test name' };

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });
});
