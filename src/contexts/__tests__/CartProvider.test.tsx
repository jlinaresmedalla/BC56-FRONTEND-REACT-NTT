import { useContext } from "react";
import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { CartProvider } from "../CartProvider";
import { CartContext } from "../cart.context";
import { addCartProduct } from "@/actions/cart.actions";
import { cartItemsMock } from "@/__mocks__";

const TestComponent = () => {
  const { cartState, dispatch } = useContext(CartContext);

  return (
    <div>
      <button onClick={() => addCartProduct(cartItemsMock, cartState, dispatch)}>Add Item</button>
      {cartState.map((c) => (
        <div key={c.id}>
          <div>{c.price}</div>
          <div>{c.quantity}</div>
        </div>
      ))}
    </div>
  );
};

const renderComponent = async (): Promise<RenderResult> => {
  let component;
  await act(async () => {
    component = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
  });
  return component!;
};

describe("CartContext component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should update context values", async () => {
    await renderComponent();

    const addButton = screen.getByText("Add Item");

    await act(async () => {
      fireEvent.click(addButton);
    });

    expect(screen.getByText(cartItemsMock.price.toString())).toHaveTextContent(cartItemsMock.price.toString());
    expect(screen.getByText(cartItemsMock.quantity!.toString())).toHaveTextContent(cartItemsMock.quantity!.toString());
  });
});
