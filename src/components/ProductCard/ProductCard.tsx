import { FC } from "react";
import { CartItem, Product } from "@/interfaces";
import { Star } from "lucide-react";
import { Button } from "../UI";
import { BaseColors } from "@/enums";
import "./ProductCard.css";

interface ProductCardProps extends Product {
  handleAddButton: (p: CartItem) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  category,
  price,
  rating,
  thumbnail,
  handleAddButton,
}) => {
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
            <Star size={16} color={BaseColors.Yellow} strokeWidth={3} />
          </span>
        </div>
      </div>
      <hr />
      <Button onClick={() => handleAddButton({ id, price, title, thumbnail })}>Agregar al carrito</Button>
    </div>
  );
};
