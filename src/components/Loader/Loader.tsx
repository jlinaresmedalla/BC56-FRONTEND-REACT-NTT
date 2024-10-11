import { LoaderPinwheel } from "lucide-react";
import "./Loader.css";

export const Loader = ({ size }: { size: number }) => {
  return (
    <div className="loader-container">
      <LoaderPinwheel size={size} className="spinner" />
    </div>
  );
};
