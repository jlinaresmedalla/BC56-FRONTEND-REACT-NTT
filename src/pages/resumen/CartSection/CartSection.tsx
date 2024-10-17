import { useContext } from "react";
import { CartContext } from "@/Providers/CartProvider";
import { calculateCartTotalAmount } from "@/utils/helpers/cart.helpers";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CartSection.css";

const CART_HEADERS = ["Producto", "Nombre", "Cantidad", "Eliminar"];

export const CartSection = () => {
  const navigate = useNavigate();
  const { cartState, incrementQuantity, decrementQuantity, removeCartProduct } = useContext(CartContext);
  const totalAmount = calculateCartTotalAmount(cartState).toFixed(2);

  return (
    <section className="cart">
      <div className="cart-headers">
        <span className="cell desktop-hide title">Resumen de carrito</span>
        {CART_HEADERS.map((header) => (
          <span className="cell mobile-hide title">{header}</span>
        ))}
      </div>
      {cartState.length ? (
        <div className="cart-rows-container">
          {cartState.map(({ thumbnail, title, quantity, id }) => (
            <div className="cart-row" key={id}>
              <span className="cell">
                <img className="cart-row-image" src={thumbnail} alt={title} />
              </span>
              <span className="cell subtitle">{title}</span>
              <span className="cell">
                <button className="primary-button" onClick={() => decrementQuantity(id)} disabled={quantity === 1}>
                  -
                </button>
                <span className="cart-row-quantity subtitle">{quantity}</span>
                <button className="primary-button" onClick={() => incrementQuantity(id)}>
                  +
                </button>
              </span>
              <span className="cart-row-action cell">
                <button className="danger-button" onClick={() => removeCartProduct(id)}>
                  Eliminar
                </button>
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
          <button className="secondary-button" onClick={() => navigate("/#products-section")}>
            Ir de compras!
          </button>
        </div>
      )}
    </section>
  );
};
