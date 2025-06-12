import { Route, Routes } from "react-router";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import "./index.css";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Reservables from "./pages/Reservables";

const App = () => {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/reservables" element={<Reservables />} />
      </Routes>
      <AppFooter />
    </div>
  );
};

export default App;
