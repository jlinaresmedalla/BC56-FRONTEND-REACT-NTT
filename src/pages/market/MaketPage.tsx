import MarketPlaceController from "./MarketPlace/MarketPlaceController";
import { BannerSection } from "./BannerSection/BannerSection";
import "./MarketPage.css";

export const MarketPage = () => {
  return (
    <main>
      <BannerSection />
      <MarketPlaceController />
    </main>
  );
};
