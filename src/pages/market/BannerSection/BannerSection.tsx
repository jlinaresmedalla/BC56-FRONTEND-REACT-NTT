import "./BannerSection.css";

export const BannerSection = () => {
  return (
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
            <button className="primary-button">Compra Ahora!</button>
          </a>
        </div>
        <div>
          <img src="/src/assets/brand/shopping-online.png" alt="banner_image" />
        </div>
      </div>
    </article>
  );
};
