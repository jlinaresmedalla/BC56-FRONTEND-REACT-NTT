import { Button, Input, Select } from "@/components/UI";
import { useMarketPageController } from "./hooks/useMartketPageController";
import { SearchX } from "lucide-react";
import { Loader, Pagination, ProductCard } from "@/components";
import "./MarketPage.css";

export const MarketPage = () => {
  const {
    categoryList,
    productList,
    currentPage,
    handleAddButton,
    handleCategorySelect,
    handleSearchInputChange,
    isProductListLoading,
    nextPage,
    onPageChange,
    prevPage,
    searchInput,
    selectedCategory,
    totalPages,
  } = useMarketPageController();

  return (
    <main>
      <article className="banner-container">
        <div className="banner">
          <div>
            <h1 className="primary-text-color">¡Bienvenido a NTT Store! 🎉</h1>
            <h3 className="secondary-text-color">Ahorra hasta un 50% en tus cosas favoritas.</h3>
            <h5>
              Desde gadgets tecnológicos hasta esenciales para el hogar, ¡tenemos todo lo que necesitas a precios
              inigualables!
            </h5>
            <a href="#products-section">
              <Button>Compra Ahora!</Button>
            </a>
          </div>
          <div>
            <img src="/src/assets/brand/shopping-online.png" alt="banner_image" />
          </div>
        </div>
      </article>
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
              {productList?.map((product) => (
                <ProductCard key={product.id} {...product} handleAddButton={handleAddButton} />
              ))}
              {!productList?.length && (
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
        {!!productList.length && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </section>
    </main>
  );
};
