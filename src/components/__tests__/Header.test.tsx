import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { Header } from "../Header/Header";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/" element={<Header />} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

describe("Header component", () => {
  it("render component", async () => {
    await renderComponent();
    expect(screen.getByText("NTT Store")).toBeInTheDocument();
  });

  it("should navigate to resumen page when clicking on the cart button", async () => {
    await renderComponent();
    fireEvent.click(screen.getByText("0"));
    expect(mockNavigate).toHaveBeenCalledWith("/resumen");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
