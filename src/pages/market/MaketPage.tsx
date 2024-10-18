import { MarketPlace } from "./MarketPlace/MarketPlace";
import { BannerSection } from "./BannerSection/BannerSection";
import "./MarketPage.css";

export const MarketPage = () => {
  return (
    <main>
      <BannerSection />
      <MarketPlace />
    </main>
  );
};
