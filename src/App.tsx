import { ToastContainer } from "react-toastify";
import { AppProvider } from "./components";
import PageRoutes from "./routes/app.routes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AppProvider>
      <PageRoutes />
      <ToastContainer theme="colored" />
    </AppProvider>
  );
};

export default App;
