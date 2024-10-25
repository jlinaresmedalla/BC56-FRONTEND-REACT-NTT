import { render, screen, RenderResult, act, fireEvent, waitFor } from "@testing-library/react";
import { useCartContext } from "@/hooks/cart.hooks";
import { FormSection } from "../FormSection/FormSection";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { cartMock } from "@/__mocks__";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockDispatch = jest.fn();

jest.mock("@/hooks/cart.hooks", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("@/actions/cart.actions", () => ({
  resetCart: jest.fn(),
}));

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={["/resumen"]}>
        <Routes>
          <Route path="/resumen" element={<FormSection />} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

const fillAndSubmitForm = async () =>
  act(async () => {
    fireEvent.change(screen.getByPlaceholderText("Ingresa tu nombre"), { target: { value: "Juan" } });
    fireEvent.change(screen.getByPlaceholderText("Ingresa tus apellidos"), { target: { value: "Linares" } });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Ate" } });
    fireEvent.change(screen.getByPlaceholderText("Ingresa tu dirección"), { target: { value: "Av Arequipa 234" } });
    fireEvent.change(screen.getByPlaceholderText("Referencia de tu dirección"), {
      target: { value: "Frente al mall" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ingresa tu número"), { target: { value: "989898989" } });

    fireEvent.click(screen.getByText("Comprar"));
  });

describe("FormSection module", () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue({ cartState: cartMock, dispatch: mockDispatch });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    await renderComponent();
    expect(screen.getByText("Información de envío")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Comprar" })).toBeInTheDocument();
  });

  it("should redirect when modal accept button is clicked", async () => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
    await renderComponent();
    await fillAndSubmitForm();

    await waitFor(() => {
      expect(screen.getByText("Su compra se realizó con exito! 🎉")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Aceptar"));
    expect(mockNavigate).toHaveBeenCalledWith("/#products-section");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it("should not submit with empty fields", async () => {
    (useCartContext as jest.Mock).mockReturnValue({ cartState: [], dispatch: mockDispatch });
    await renderComponent();
    await fillAndSubmitForm();
    expect(screen.getByText("El carrito está vacío")).toBeInTheDocument();
  });
});
