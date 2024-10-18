import { useState } from "react";
import { useCategoryListQuery, useProductListQuery } from "@/hooks/fetch.hooks";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Loader } from "@/components";
import { SearchX } from "lucide-react";
import { Input, Select } from "@/components/UI";
import "./MarketPlace.css";

export const MarketPlace = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data: categoryList } = useCategoryListQuery();
  const { data: producList, isLoading: isProductListLoading } = useProductListQuery(selectedCategory);

  const filteredProductList = producList?.filter((product) =>
    product?.title?.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="products-section" id="products-section">
      <h3>Encuentra lo que buscas en nuestro catálogo</h3>
      <div className="filters">
        <Input
          type="text"
          id="search-input"
          containerClassName="search-input"
          placeholder="Buscar productos..."
          onChange={handleSearchInputChange}
          value={searchInput}
        />
        <Select
          options={categoryList!}
          valueKey={"slug"}
          labelKey={"name"}
          containerClassName="search-category"
          staticLabel="Todas las categorías"
          onChange={handleCategorySelect}
          value={selectedCategory}
        />
      </div>
      <div className="products-container" id="products-container">
        {isProductListLoading ? (
          <Loader size={100} />
        ) : (
          <>
            {filteredProductList?.map((product) => <ProductCard key={product.id} {...product} />)}
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
