import DrinkPage from "./pages/DrinkPage";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import WellnessPage from "./pages/WellnessPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center w-[300px] h-[500px] bg-[#000000]">
      <div className="flex flex-col items-center justify-center w-[300px] h-[500px] bg-[#000000]">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/hydration-tracker" element={<DrinkPage />} />
            <Route path="/wellness-reminder" element={<WellnessPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
