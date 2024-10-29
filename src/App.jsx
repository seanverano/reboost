import DrinkPage from "./pages/DrinkPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#CEF3E6]">
      <div className="flex flex-col items-center justify-center w-[300px] h-[500px] bg-[#ffffff] shadow-lg rounded-lg">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hydration-tracker" element={<DrinkPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
