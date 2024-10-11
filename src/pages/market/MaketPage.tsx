import MarketPlaceController from "./MarketPlace/MarketPlaceController";
import { BannerSection } from "./BannerSection/BannerSection";
import "./MarketPage.css";

const MarketPage = () => {
  return (
    <main>
      <BannerSection />
      <MarketPlaceController />
    </main>
  );
};

export default MarketPage;
