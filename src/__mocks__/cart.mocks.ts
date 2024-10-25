import { Cart, CartItem } from "@/interfaces";

export const cartMock: Cart = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    quantity: 2,
  },
];

export const cartItemsMock: CartItem = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  price: 9.99,
  thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  quantity: 2,
};
