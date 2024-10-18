import { CircleUserRound, ShoppingCart } from "lucide-react";
import { getCartCount } from "@/helpers/cart.helpers";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/cart.hooks";
import { Button } from "../UI";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const cartCount = getCartCount(cartState);

  return (
    <header>
      <Link to={"/"} className="logo-container">
        <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
        <span>NTT Store </span>
      </Link>
      <nav>
        <Button dimension="chip">
          Profile <CircleUserRound size={20} color="#ffffff" />
        </Button>
        <Button variant="secondary" dimension="chip" onClick={() => navigate("/resumen")}>
          <span id="cart-count">{cartCount}</span> <ShoppingCart size={20} color="#ffffff" strokeWidth={2.5} />
        </Button>
      </nav>
    </header>
  );
};
