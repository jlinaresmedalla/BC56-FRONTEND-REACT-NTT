import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../LoginPage";
import { PublicRoutes } from "@/enums";

const queryClient = new QueryClient();

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[PublicRoutes.Login]}>
          <Routes>
            <Route path={PublicRoutes.Login} element={<LoginPage />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    ),
  );
  return component;
};

describe("Login page component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render page", async () => {
    await renderComponent();

    expect(screen.getByText("Inicio de sesión")).toBeInTheDocument();
  });
});

describe("Resetpassword section", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render page", async () => {
    await renderComponent();
    act(() => {
      fireEvent.click(screen.getByText("¿Olvidé contraseña?"));
    });
    expect(screen.getByText("Resetea tu contraseña")).toBeInTheDocument();
  });
});
