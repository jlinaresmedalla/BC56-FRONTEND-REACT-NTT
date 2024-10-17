import { useContext } from "react";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { CartContext } from "@/Providers/CartProvider";
import { getCartCount } from "@/utils/helpers/cart.helpers";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { cartState } = useContext(CartContext);
  const cartCount = getCartCount(cartState);

  return (
    <header>
      <Link to={"/"} className="logo-container">
        <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
        <span>NTT Store </span>
      </Link>
      <nav>
        <div className="chip primary-bg-color">
          Profile <CircleUserRound size={20} color="#ffffff" />
        </div>
        <Link to={"/resumen"} className="chip secondary-bg-color">
          <span id="cart-count">{cartCount}</span> <ShoppingCart size={20} color="#ffffff" strokeWidth={2.5} />
        </Link>
      </nav>
    </header>
  );
};
