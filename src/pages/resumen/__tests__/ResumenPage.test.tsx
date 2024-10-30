import { act, render, RenderResult, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ResumenPage } from "../ResumenPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrivateRoutes } from "@/enums";

const queryClient = new QueryClient();

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[PrivateRoutes.Resumen]}>
          <Routes>
            <Route path={PrivateRoutes.Resumen} element={<ResumenPage />} />
          </Routes>
        </MemoryRouter>
        ,
      </QueryClientProvider>,
    ),
  );
  return component;
};

describe("CartSection module section", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render page", async () => {
    await renderComponent();

    expect(screen.getByText("Ir al market")).toBeInTheDocument();
  });
});
