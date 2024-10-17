import { Product } from "./product.interface";

export type CartItem = Pick<Product, "id" | "title" | "price" | "thumbnail"> & { quantity?: number };

export type Cart = CartItem[];
