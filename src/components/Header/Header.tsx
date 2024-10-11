import { useContext } from "react";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { StoreContext } from "@/Providers/storeProvider";
import { getCartCount } from "@/utils/helpers/cart.helpers";
import "./Header.css";

export const Header = () => {
  const { state } = useContext(StoreContext);
  const cartCount = getCartCount(state.cart);

  return (
    <header>
      <div className="logo-container">
        <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
        <span>NTT Store </span>
      </div>
      <nav>
        <div className="chip">
          Profile <CircleUserRound size={20} color="#ffffff" />
        </div>
        <a className="chip">
          <span id="cart-count">{cartCount}</span> <ShoppingCart size={20} color="#ffffff" strokeWidth={2.5} />
        </a>
      </nav>
    </header>
  );
};
