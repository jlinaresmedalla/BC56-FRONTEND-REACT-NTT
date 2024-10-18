import { calculateCartTotalAmount } from "@/helpers/cart.helpers";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/cart.hooks";
import { Button } from "@/components/UI";
import "./CartSection.css";

const CART_HEADERS = ["Producto", "Nombre", "Cantidad", "Eliminar"];

export const CartSection = () => {
  const { cartState, incrementQuantity, decrementQuantity, removeCartProduct } = useCart();
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
          {cartState.map(({ thumbnail, title, quantity, id }) => (
            <div className="cart-row" key={id}>
              <span className="cell">
                <img className="cart-row-image" src={thumbnail} alt={title} />
              </span>
              <span className="cell subtitle">{title}</span>
              <span className="cell">
                <Button dimension="icon" onClick={() => decrementQuantity(id)} disabled={quantity === 1}>
                  <Minus />
                </Button>
                <span className="cart-row-quantity subtitle">{quantity}</span>
                <Button dimension="icon" onClick={() => incrementQuantity(id)}>
                  <Plus />
                </Button>
              </span>
              <span className="cart-row-action cell">
                <Button variant="danger" onClick={() => removeCartProduct(id)}>
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
