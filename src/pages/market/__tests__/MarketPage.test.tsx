import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { act } from "react";
import { useCartContext } from "@/hooks/cart.hooks";
import { addCartProduct } from "@/actions/cart.actions";
import { categoriesMock, productListMock, productMock } from "@/__mocks__";
import { PrivateRoutes } from "@/enums";
import { MarketPage } from "../MaketPage";
import { useCategoryListQuery } from "@/hooks/useCategoryListQuery";
import { useProductListQuery } from "@/hooks/useProductListQuery";

jest.mock("@/hooks/useCategoryListQuery");
jest.mock("@/hooks/useProductListQuery");
jest.mock("@/hooks/cart.hooks");
jest.mock("@/actions/cart.actions");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={[PrivateRoutes.Dashboard]}>
        <Routes>
          <Route path={PrivateRoutes.Dashboard} element={<MarketPage />} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

describe("MarketPlace component", () => {
  beforeEach(async () => {
    (useCategoryListQuery as jest.Mock).mockReturnValue({
      data: categoriesMock,
    });

    (useProductListQuery as jest.Mock).mockReturnValue({
      data: productListMock,
      isLoading: false,
    });

    (useCartContext as jest.Mock).mockReturnValue({
      cartState: [],
      dispatch: jest.fn(),
    });

    (addCartProduct as jest.Mock).mockClear();
    await renderComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render component", async () => {
    await renderComponent();
    expect(screen.getAllByText("Ahorra hasta un 50% en tus cosas favoritas.")[0]).toBeInTheDocument();
  });

  it("renders marketplace with search and category filter", () => {
    expect(screen.getByPlaceholderText("Buscar productos...")).toBeInTheDocument();
    expect(screen.getByText("Encuentra lo que buscas en nuestro catálogo")).toBeInTheDocument();
    expect(screen.getByText("Todas las categorías")).toBeInTheDocument();
    expect(screen.getByText(productMock.title)).toBeInTheDocument();
  });

  it("displays filtered products based on search input", async () => {
    const searchInput = screen.getByPlaceholderText("Buscar productos...");

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "Laptop" } });
    });

    expect(screen.getByPlaceholderText("Buscar productos...")).toHaveValue("Laptop");
    expect(screen.queryByText(productMock.title)).not.toBeInTheDocument();
  });

  it("displays no products message when search yields no results", async () => {
    const searchInput = screen.getByPlaceholderText("Buscar productos...");

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "Nonexistent" } });
    });
    expect(screen.queryByText("Nonexistent")).toBeInTheDocument();
  });

  it("calls addCartProduct action when addButton is clicked", async () => {
    const addButton = screen.getAllByRole("button", { name: "Agregar al carrito" })[0];

    fireEvent.click(addButton);

    expect(addCartProduct).toHaveBeenCalledTimes(1);
  });

  test("should change category when select", async () => {
    const selectField = screen.getByRole("combobox");
    expect(selectField).toBeInTheDocument();

    fireEvent.change(selectField, { target: { value: "groceries" } });

    expect(screen.getByText("Groceries")).toBeInTheDocument();
  });
});
