import "./CartSection.css";

const CART_HEADERS = ["Producto", "Nombre", "Cantidad", "Eliminar"];

export const CartSection = () => {
  return (
    <section className="cart-container">
      <div className="cart">
        <div className="cart-headers">
          <span className="cell desktop-hide title">Cart</span>
          {CART_HEADERS.map((header) => (
            <span className="cell mobile-hide title">{header}</span>
          ))}
        </div>
        <div className="cart-rows-container">
          {[1, 2, 3].map(() => (
            <div className="cart-row">
              <span className="cart-row-image cell">img</span>
              <span className="cart-row-name cell">name</span>
              <span className="cart-row-quantity cell">
                <button className="primary-button">-</button>
                <span>10</span>
                <button className="primary-button">+</button>
              </span>
              <span className="cart-row-action cell">
                <button className="primary-button">Eliminar</button>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-total-amount subtitle">Total a pagar: S/. {""}</div>
    </section>
  );
};
