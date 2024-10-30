import { LogOut, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../UI";
import { PrivateRoutes } from "@/enums";
import { useHeaderController } from "./hooks/useHeaderController";
import "./Header.css";

export const Header = () => {
  const { cartCount, firstName, image, handleCartButton, handleLogOutButton } = useHeaderController();

  return (
    <header>
      <div className="toolbar">
        <Link to={PrivateRoutes.Dashboard} className="logo-container">
          <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
          <span className="mobile-hide">NTT Store </span>
        </Link>
        <nav>
          <span className="header-user-info mobile-hide">
            <span className="title">
              Bienvenido/a <span className="secondary-text-color">{firstName}</span>
            </span>
            <span className="subtitle header-log-out" onClick={handleLogOutButton}>
              Cerrar sesión
            </span>
          </span>
          <Button dimension="chip" className="desktop-hide">
            {firstName} <img src={image} width={"20px"} alt="avatar" />
          </Button>
          <Button variant="secondary" dimension="chip" onClick={handleCartButton}>
            <span id="cart-count">{cartCount}</span> <ShoppingCart size={20} color="#ffffff" strokeWidth={2.5} />
          </Button>
          <Button dimension="chip" variant="danger" className="desktop-hide" onClick={handleLogOutButton}>
            <LogOut size={20} strokeWidth={3} />
          </Button>
        </nav>
      </div>
    </header>
  );
};
