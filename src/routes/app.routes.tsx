import { Layout } from "@/components";
import { LoginPage, MarketPage, ResumenPage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route Component={Layout}>
          <Route path="/" Component={MarketPage} />
          <Route path="/resumen" Component={ResumenPage} />
          <Route path="*" element={<div>Not Found ...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
