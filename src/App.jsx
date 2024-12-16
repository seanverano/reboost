import React, { useEffect } from "react";
import DrinkPage from "./pages/DrinkPage";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import WellnessPage from "./pages/WellnessPage";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center w-[300px] h-[500px] bg-[#000000]">
      <div className="flex flex-col items-center justify-center w-[300px] h-[500px] bg-[#000000]">
        <Router>
          <LastPageRestorer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/hydration-tracker" element={<DrinkPage />} />
              <Route path="/wellness-reminder" element={<WellnessPage />} />
            </Routes>
          </LastPageRestorer>
        </Router>
      </div>
    </div>
  );
}

function LastPageRestorer({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    chrome.storage.local.get(["lastVisitedPage"], (result) => {
      if (
        result.lastVisitedPage &&
        result.lastVisitedPage !== "/" &&
        location.pathname === "/"
      ) {
        navigate(result.lastVisitedPage);
      }
    });

    if (location.pathname !== "/") {
      chrome.storage.local.set({ lastVisitedPage: location.pathname });
    }
  }, [location.pathname, navigate]);

  return children;
}

export default App;
