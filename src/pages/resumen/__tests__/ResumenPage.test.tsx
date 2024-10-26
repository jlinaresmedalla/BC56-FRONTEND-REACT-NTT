import { act, render, RenderResult, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ResumenPage } from "../ResumenPage";

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={["/resumen"]}>
        <Routes>
          <Route path="/resumen" element={<ResumenPage />} />
        </Routes>
      </MemoryRouter>,
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
