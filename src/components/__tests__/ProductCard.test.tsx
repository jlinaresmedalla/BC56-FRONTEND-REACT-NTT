import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { ProductCard } from "../ProductCard/ProductCard";
import { productMock } from "@/__mocks__";

const handleAddButtonMock = jest.fn();

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(<ProductCard {...productMock} handleAddButton={handleAddButtonMock} />),
  );
  return component;
};

describe("ProductCard component", () => {
  beforeEach(() => {
    handleAddButtonMock.mockClear();
  });

  it("renders component", async () => {
    await renderComponent();
    expect(screen.getByText("Categoría:")).toBeInTheDocument();
    expect(screen.getByText("beauty")).toBeInTheDocument();
    expect(screen.getByText("Precio:")).toBeInTheDocument();
    expect(screen.getByText("S/ 9.99")).toBeInTheDocument();
    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText("4.94")).toBeInTheDocument();
  });

  it("should call handleAddButtonMock when clicking on the add cart button", async () => {
    await renderComponent();

    fireEvent.click(screen.getByText("Agregar al carrito"));
    expect(handleAddButtonMock).toHaveBeenCalledTimes(1);
    expect(handleAddButtonMock).toHaveBeenCalledWith({
      id: productMock.id,
      price: productMock.price,
      title: productMock.title,
      thumbnail: productMock.thumbnail,
    });
  });
});
