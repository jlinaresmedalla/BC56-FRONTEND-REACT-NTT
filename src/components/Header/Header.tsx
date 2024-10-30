import { CircleUserRound, ShoppingCart } from "lucide-react";
import { getCartCount } from "@/helpers/cart.helpers";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "@/hooks/cart.hooks";
import { Button } from "../UI";
import { PrivateRoutes } from "@/enums";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const { cartState } = useCartContext();
  const cartCount = getCartCount(cartState);

  return (
    <header>
      <Link to={PrivateRoutes.Dashboard} className="logo-container">
        <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
        <span className="mobile-hide">NTT Store </span>
      </Link>
      <nav>
        <Button dimension="chip">
          Profile <CircleUserRound size={20} color="#ffffff" />
        </Button>
        <Button variant="secondary" dimension="chip" onClick={() => navigate(PrivateRoutes.Resumen)}>
          <span id="cart-count">{cartCount}</span> <ShoppingCart size={20} color="#ffffff" strokeWidth={2.5} />
        </Button>
      </nav>
    </header>
  );
};
