import { ArrowLeft } from "lucide-react";
import { CartSection } from "./CartSection/CartSection";
import { FormSection } from "./FormSection/FormSection";
import { Link } from "react-router-dom";
import "./ResumenPage.css";

export const ResumenPage = () => {
  return (
    <main>
      <Link to="/" className="redirect-btn">
        <ArrowLeft />
        <span>Ir al market</span>
      </Link>
      <CartSection />
      <FormSection />
    </main>
  );
};
