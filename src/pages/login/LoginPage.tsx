import { Button, Input } from "@/components/UI";
import { ResetPasswordSection } from "./ResetPasswordSection/ResetPasswordSection";
import { useLoginPageController } from "./hooks/useLoginPageController";
import "./LoginPage.css";

export const LoginPage = () => {
  const { values, handleChange, errors, handleSubmit, isLoginRequestLoading, touched } = useLoginPageController();

  return (
    <main className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <center>
            <img className="logo-img" src="/src/assets/brand/shopping-bag.png" alt="brand_logo" />
          </center>
          <h3>
            <center>Inicio de sesión</center>
          </h3>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={touched.username ? errors.username : ""}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password ? errors.password : ""}
          />
          <ResetPasswordSection />
          <Button type="submit" disabled={isLoginRequestLoading}>
            Iniciar Sesión
          </Button>
        </form>
        <div className="login-side-image mobile-hide"></div>
      </div>
    </main>
  );
};
