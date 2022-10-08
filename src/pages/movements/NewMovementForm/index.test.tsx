import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WalletProvider from "contexts/wallet/WalletContext";
import NewMovementForm from "./index";

const mockOnSubmit = jest.fn();

describe("NewMovementForm", () => {
  it("should submit", async () => {
    render(
      <WalletProvider>
        <NewMovementForm onSubmit={mockOnSubmit} type={0} />
      </WalletProvider>
    );

    const input = screen.getByLabelText("Cantidad");
    userEvent.type(input, "500");
    userEvent.keyboard("{enter}");

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(500);
    });
  });

  it("should show no enought amount error message", async () => {
    render(
      <WalletProvider>
        <NewMovementForm onSubmit={mockOnSubmit} type={1} />
      </WalletProvider>
    );

    const input = screen.getByLabelText("Cantidad");
    userEvent.type(input, "50000000");
    userEvent.keyboard("{enter}");

    await waitFor(() => {
      expect(
        screen.getByText(
          "No dispones de tanto dinero. Máximo a extraer: 1.609,70 €"
        )
      ).toBeInTheDocument();
    });
  });

  describe("should show format error", () => {
    it("when not a number", async () => {
      render(
        <WalletProvider>
          <NewMovementForm onSubmit={mockOnSubmit} type={1} />
        </WalletProvider>
      );

      const input = screen.getByLabelText("Cantidad");
      userEvent.type(input, "test");
      userEvent.keyboard("{enter}");

      await waitFor(() => {
        expect(screen.getByText("Formato incorrecto")).toBeInTheDocument();
      });
    });

    it("when negative", async () => {
      render(
        <WalletProvider>
          <NewMovementForm onSubmit={mockOnSubmit} type={1} />
        </WalletProvider>
      );

      const input = screen.getByLabelText("Cantidad");
      userEvent.type(input, "-100");
      userEvent.keyboard("{enter}");

      await waitFor(() => {
        expect(
          screen.getByText("La cantidad debe ser mayor a 0")
        ).toBeInTheDocument();
      });
    });
  });
});
