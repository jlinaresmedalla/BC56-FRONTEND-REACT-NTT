import { calculateCartTotalAmount } from "@/helpers/cart.helpers";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@/hooks/cart.hooks";
import { Button } from "@/components/UI";
import "./CartSection.css";
import { decrementQuantity, incrementQuantity, removeCartProduct } from "@/actions/cart.actions";

const CART_HEADERS = ["Producto", "Nombre", "Precio", "Cantidad", "Eliminar"];

export const CartSection = () => {
  const { cartState, dispatch } = useCartContext();
  const navigate = useNavigate();
  const totalAmount = calculateCartTotalAmount(cartState).toFixed(2);

  return (
    <section className="cart">
      <div className="cart-headers">
        <span className="cell desktop-hide title">Resumen de carrito</span>
        {CART_HEADERS.map((header) => (
          <span className="cell mobile-hide title" key={header}>
            {header}
          </span>
        ))}
      </div>
      {cartState.length ? (
        <div className="cart-rows-container">
          {cartState.map(({ thumbnail, title, quantity, id, price }) => (
            <div className="cart-row" key={id}>
              <span className="cell">
                <img className="cart-row-image" src={thumbnail} alt={title} />
              </span>
              <span className="cell subtitle">
                <center>{title}</center>
              </span>
              <span className="cell subtitle">
                <center>S/. {price} c/u</center>
              </span>
              <span className="cell">
                <Button
                  dimension="icon"
                  onClick={() => decrementQuantity(id, dispatch)}
                  disabled={quantity === 1}
                  data-testid="decrementQuantityBtn"
                >
                  <Minus />
                </Button>
                <span className="cart-row-quantity subtitle">{quantity}</span>
                <Button
                  dimension="icon"
                  onClick={() => incrementQuantity(id, dispatch)}
                  data-testid="incrementQuantityBtn"
                >
                  <Plus />
                </Button>
              </span>
              <span className="cart-row-action cell">
                <Button
                  variant="danger"
                  dimension="small"
                  onClick={() => removeCartProduct(id, dispatch)}
                  data-testid="removeCartProductBtn"
                >
                  <Trash2 />
                </Button>
              </span>
            </div>
          ))}
          <div className="cart-total-amount title">
            Total a pagar: S/. <strong> {totalAmount}</strong>
          </div>
        </div>
      ) : (
        <div className="cart-empty-message">
          <ShoppingCart size={150} />
          <span className="title">Carrito vacío</span>
          <Button variant="secondary" onClick={() => navigate("/#products-section")}>
            Ir de compras!
          </Button>
        </div>
      )}
    </section>
  );
};
