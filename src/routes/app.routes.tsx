import { Layout } from "@/components";
import { MarketPage, ResumenPage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={MarketPage} />
          <Route path="/resumen" Component={ResumenPage} />
          <Route path="*" element={<div>Not Found ...</div>} />
        </Route>
        <Route path="/login" element={<div>Pagina en construcción</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
