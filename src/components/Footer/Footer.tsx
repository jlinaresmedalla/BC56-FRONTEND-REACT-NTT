import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>Siguenos en nuestras redes sociales</p>
      <section className="socials">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/src/assets/socials/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/src/assets/socials/instagram.png" alt="instagram" />
        </a>
        <a href="https://www.tiktok.com/" target="_blank">
          <img src="/src/assets/socials/tiktok.png" alt="tiktok" />
        </a>
      </section>
      <p>© 2024 NTT Store. Todos los derechos reservados</p>
      <p className="primary-text-color">
        <a href="#">Política de privacidad</a> | <a href="#">Término de uso</a> |<a href="#">Contacto</a>
      </p>
    </footer>
  );
};
