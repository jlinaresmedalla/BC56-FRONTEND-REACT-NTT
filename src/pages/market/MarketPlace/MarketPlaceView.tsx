import { useContext, useState } from "react";
import { MarketPlaceViewProps } from "./MarketPlace.interface";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { StoreContext } from "@/Providers/storeProvider";
import { AddCartItem } from "@/Providers/cart.reducers";
import { Loader } from "@/components";
import { SearchX } from "lucide-react";
import "./MarketPlace.css";

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
            <option value={category.slug} key={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="products-container" id="products-container">
        {isProductListLoading ? (
          <Loader size={100} />
        ) : (
          <>
            {filteredProductList?.map((product) => (
              <ProductCard key={product.id} {...product} handleAddCartItemButton={handleAddCartItemButton} />
            ))}
            {!filteredProductList?.length && (
              <div>
                <center>
                  <SearchX size={200} />
                </center>
                <br />
                <center>
                  No se encontraron productos con "<b>{searchInput}</b>" en esta categoría
                </center>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
