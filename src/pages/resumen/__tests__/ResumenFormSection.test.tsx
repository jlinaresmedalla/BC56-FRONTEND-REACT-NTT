import { render, screen, RenderResult, act, fireEvent, waitFor } from "@testing-library/react";
import { useCartContext } from "@/hooks/cart.hooks";
import { FormSection } from "../FormSection/FormSection";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { cartMock } from "@/__mocks__";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrivateRoutes } from "@/enums";

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

const queryClient = new QueryClient();

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[PrivateRoutes.Resumen]}>
          <Routes>
            <Route path={PrivateRoutes.Resumen} element={<FormSection />} />
          </Routes>
        </MemoryRouter>
        ,
      </QueryClientProvider>,
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
    expect(mockNavigate).toHaveBeenCalledWith(PrivateRoutes.Dashboard);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it("should not submit with empty fields", async () => {
    (useCartContext as jest.Mock).mockReturnValue({ cartState: [], dispatch: mockDispatch });
    await renderComponent();
    await fillAndSubmitForm();
    expect(screen.getByText("El carrito está vacío")).toBeInTheDocument();
  });
});
