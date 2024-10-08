import { handleCartProductAdd } from "../actions/cart.actions";
import { Product } from "../interfaces/product.interface";

export const ProductCard = (product: Product, container: HTMLElement) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;

  const productCardBody = document.createElement("div");
  productCardBody.classList.add("product-card-body");

  const title = document.createElement("p");
  title.classList.add("primary-text-color", "title");
  title.textContent = product.title;

  const category = document.createElement("p");

  const categoryLabel = document.createElement("span");
  categoryLabel.classList.add("subtitle");
  categoryLabel.textContent = "Categoría: ";

  const categoryText = document.createTextNode(product.category);

  category.appendChild(categoryLabel);
  category.appendChild(categoryText);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const price = document.createElement("span");

  const priceLabel = document.createElement("span");
  priceLabel.classList.add("subtitle");
  priceLabel.textContent = "Precio: ";

  const priceValue = document.createTextNode(`S/ ${product.price}`);

  price.appendChild(priceLabel);
  price.appendChild(priceValue);

  const rating = document.createElement("span");
  rating.classList.add("rating");

  const ratingLabel = document.createElement("span");
  ratingLabel.classList.add("subtitle");
  ratingLabel.textContent = "Rating: ";

  const ratingValue = document.createTextNode(`${product.rating}`);

  const starIcon = document.createElement("img");
  starIcon.src = "/src/assets/icons/starIcon.svg";
  starIcon.alt = "star_icon";

  rating.appendChild(ratingLabel);
  rating.appendChild(ratingValue);
  rating.appendChild(starIcon);

  productInfo.appendChild(price);
  productInfo.appendChild(rating);

  productCardBody.appendChild(title);
  productCardBody.appendChild(category);
  productCardBody.appendChild(productInfo);

  const hr = document.createElement("hr");

  const button = document.createElement("button");
  button.classList.add("primary-button");
  button.addEventListener("click", handleCartProductAdd(product));
  button.textContent = "Agregar al carrito";

  productCard.appendChild(img);
  productCard.appendChild(productCardBody);
  productCard.appendChild(hr);
  productCard.appendChild(button);

  container.appendChild(productCard);
};
