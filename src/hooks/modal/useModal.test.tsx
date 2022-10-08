import { renderHook, act } from "@testing-library/react";
import useModal from "./useModal";

const mockOnSave = jest.fn();

test("should show when open", () => {
  const { result } = renderHook(() => useModal(mockOnSave));

  expect(getModalProps(result).show).toBeUndefined();

  act(() => {
    result.current.openModal();
  });
  expect(getModalProps(result).show).toBeTruthy();

  act(() => {
    result.current.closeModal();
  });
  expect(getModalProps(result).show).toBeFalsy();
});

const getModalProps: (result: any) => any = result =>
  result.current.withModal("Test", "Title")?.props;
