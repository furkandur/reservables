import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import "./index.css";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div>
      <AppHeader />
      <Landing />
      <AppFooter />
    </div>
  );
};

export default App;
