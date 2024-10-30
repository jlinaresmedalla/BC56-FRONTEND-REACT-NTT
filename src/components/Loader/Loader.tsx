import { LoaderPinwheel } from "lucide-react";
import { FC } from "react";
import "./Loader.css";

export const Loader: FC<{ size: number }> = ({ size }) => {
  return (
    <div className="loader-container">
      <LoaderPinwheel size={size} className="spinner" />
    </div>
  );
};
