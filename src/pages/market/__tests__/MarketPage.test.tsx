import { screen } from "@testing-library/dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MarketPage } from "../MaketPage";
import { act, render, RenderResult } from "@testing-library/react";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<MarketPage />} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

describe("Marketpage component", () => {
  it("render component", async () => {
    await renderComponent();
    expect(screen.getByText("Encuentra lo que buscas en nuestro catálogo")).toBeInTheDocument();
  });
});
