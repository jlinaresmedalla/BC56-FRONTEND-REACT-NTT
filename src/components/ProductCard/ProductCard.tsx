import { CartItem, Product } from "@/interfaces";
import { Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/Providers/CartProvider";
import "./ProductCard.css";

export const ProductCard = ({ id, title, category, price, rating, thumbnail }: Product) => {
  const { cartState, addCartProduct, incrementQuantity } = useContext(CartContext);

  const handleAddCartItemButton = (product: CartItem) => () => {
    const productExist = cartState.some((item) => item.id === product.id);
    if (productExist) {
      incrementQuantity(product.id);
      return;
    }
    addCartProduct(product);
  };

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div className="product-card-body">
        <p className="primary-text-color title">{title}</p>
        <p>
          <span className="subtitle">Categoría:</span> {category}
        </p>
        <div className="product-info">
          <span>
            <span className="subtitle">Precio:</span>
            {` S/ ${price}`}
          </span>
          <span className="rating">
            <span className="subtitle">Rating:</span> <span>{rating}</span>
            <Star size={16} color="#ffae00" strokeWidth={3} />
          </span>
        </div>
      </div>
      <hr />
      <button className="primary-button" onClick={handleAddCartItemButton({ id, price, title, thumbnail })}>
        Agregar al carrito
      </button>
    </div>
  );
};
