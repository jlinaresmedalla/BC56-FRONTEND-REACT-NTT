import { AuthHoc, Layout } from "@/components";
import { PrivateRoutes, PublicRoutes } from "@/constants/routes.constants";
import { LoginPage, MarketPage, ResumenPage } from "@/pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.Login} Component={LoginPage} />
        <Route path="*" element={<Navigate to={PrivateRoutes.Dashboard} replace />} />
        <Route element={AuthHoc(Layout)}>
          <Route path={PrivateRoutes.Dashboard} Component={MarketPage} />
          <Route path={PrivateRoutes.Resumen} Component={ResumenPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
