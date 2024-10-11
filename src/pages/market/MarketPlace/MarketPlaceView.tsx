import { useContext, useState } from "react";
import { MarketPlaceViewProps } from "./MarketPlace.interface";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import "./MarketPlace.css";
import { StoreContext } from "@/Providers/storeProvider";
import { AddCartItem } from "@/Providers/cart.reducers";

export const MarketPlaceView = ({
  categoryList,
  setSelectedCategory,
  selectedCategory,
  producList,
  isProductListLoading,
}: MarketPlaceViewProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { dispatch } = useContext(StoreContext);

  const filteredProductList = producList?.filter((product) =>
    product?.title?.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddCartItemButton = (id: number) => () => {
    AddCartItem(dispatch, { id });
  };

  return (
    <section className="products-section" id="products-section">
      <h3>Encuentra lo que buscas en nuestro catálogo</h3>
      <div className="filters">
        <input
          type="text"
          className="input-field"
          id="search-input"
          placeholder="Buscar productos..."
          onChange={handleSearchInputChange}
          value={searchInput}
        />
        <select className="select-field" onChange={handleCategorySelect} value={selectedCategory}>
          <option value="">Todas las categorías</option>
          {categoryList?.map((category) => (
            <option value={category.url} key={category.url}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="products-container" id="products-container">
        {!filteredProductList?.length && <div>No se encontraron productos</div>}
        {isProductListLoading ? (
          <div>Loading...</div>
        ) : (
          filteredProductList?.map((product) => (
            <ProductCard key={product.id} {...product} handleAddCartItemButton={handleAddCartItemButton} />
          ))
        )}
      </div>
    </section>
  );
};
