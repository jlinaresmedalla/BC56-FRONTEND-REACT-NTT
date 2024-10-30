import { resetAuthInfo } from "@/actions/auth.actions";
import { resetCart } from "@/actions/cart.actions";
import { PrivateRoutes, PublicRoutes } from "@/enums";
import { getCartCount } from "@/helpers/cart.helpers";
import { useAuthContext } from "@/hooks/auth.hooks";
import { useCartContext } from "@/hooks/cart.hooks";
import { useNavigate } from "react-router-dom";

export const useHeaderController = () => {
  const navigate = useNavigate();
  const {
    authInfoState: { firstName, image },
    dispatch: authDispatch,
  } = useAuthContext();
  const { cartState, dispatch: cartDispatch } = useCartContext();
  const cartCount = getCartCount(cartState);

  const handleLogOutButton = () => {
    resetAuthInfo(authDispatch);
    resetCart(cartDispatch);
    navigate(PublicRoutes.Login);
  };

  const handleCartButton = () => navigate(PrivateRoutes.Resumen);

  return { cartCount, firstName, image, handleLogOutButton, handleCartButton };
};
