import "./styles.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Drivers from "./pages/Drivers";
import About from "./pages/About";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <Menu />
          <div className="content">
            <Routes>
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;