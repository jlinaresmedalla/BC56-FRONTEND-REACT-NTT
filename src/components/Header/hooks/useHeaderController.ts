import { resetAuthInfo } from "@/actions/auth.actions";
import { PrivateRoutes, PublicRoutes } from "@/enums";
import { getCartCount } from "@/helpers/cart.helpers";
import { useAuthContext } from "@/hooks/auth.hooks";
import { useCartContext } from "@/hooks/cart.hooks";
import { useNavigate } from "react-router-dom";

export const useHeaderController = () => {
  const navigate = useNavigate();
  const {
    authInfoState: { firstName, image },
    dispatch,
  } = useAuthContext();
  const { cartState } = useCartContext();
  const cartCount = getCartCount(cartState);

  const handleLogOutButton = () => {
    resetAuthInfo(dispatch);
    navigate(PublicRoutes.Login);
  };

  const handleCartButton = () => navigate(PrivateRoutes.Resumen);

  return { cartCount, firstName, image, handleLogOutButton, handleCartButton };
};
