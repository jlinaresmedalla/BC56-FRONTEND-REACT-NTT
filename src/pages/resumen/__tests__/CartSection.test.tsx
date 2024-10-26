import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { CartSection } from "../CartSection/CartSection";
import { useCartContext } from "@/hooks/cart.hooks";
import { incrementQuantity, decrementQuantity, removeCartProduct } from "@/actions/cart.actions";
import { act } from "react";
import { cartMock } from "@/__mocks__";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("@/actions/cart.actions", () => ({
  incrementQuantity: jest.fn(),
  decrementQuantity: jest.fn(),
  removeCartProduct: jest.fn(),
}));

jest.mock("@/hooks/cart.hooks", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={["/resumen"]}>
        <Routes>
          <Route path="/resumen" element={<CartSection />} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

describe("CartSection module section", () => {
  beforeEach(async () => {
    (useCartContext as jest.Mock).mockReturnValue({ cartState: cartMock, dispatch: mockDispatch });
    await renderComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render component with cart items", async () => {
    cartMock.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.quantity!.toString())).toBeInTheDocument();
    });
  });

  it("should call incrementQuantity action when increment button clicked", async () => {
    const incrementButtons = screen.getByTestId("incrementQuantityBtn");
    fireEvent.click(incrementButtons);

    expect(incrementButtons).toBeInTheDocument();
    expect(incrementQuantity).toHaveBeenCalledWith(cartMock[0].id, mockDispatch);
  });

  it("should call decrementQuantity action when decrement button clicked", async () => {
    const decrementButton = screen.getByTestId("decrementQuantityBtn");

    fireEvent.click(decrementButton);
    expect(decrementButton).toBeInTheDocument();
    expect(decrementQuantity).toHaveBeenCalledWith(cartMock[0].id, mockDispatch);
  });

  it("should call removeCartProduct action when delete button clicked", async () => {
    const deleteButton = screen.getByTestId("removeCartProductBtn");
    fireEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument();
    expect(removeCartProduct).toHaveBeenCalledWith(cartMock[0].id, mockDispatch);
  });

  it("on empty cart should redirect when button is clicked", async () => {
    (useCartContext as jest.Mock).mockReturnValue({ cartState: [], dispatch: mockDispatch });
    await renderComponent();

    fireEvent.click(screen.getByText("Ir de compras!"));
    expect(mockNavigate).toHaveBeenCalledWith("/#products-section");
  });
});
