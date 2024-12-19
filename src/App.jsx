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
          <NavigationPersistence>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/hydration-tracker" element={<DrinkPage />} />
              <Route path="/wellness-reminder" element={<WellnessPage />} />
            </Routes>
          </NavigationPersistence>
        </Router>
      </div>
    </div>
  );
}

function NavigationPersistence({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkSavedPath = async () => {
      const { lastVisitedPage } = await chrome.storage.local.get(
        "lastVisitedPage"
      );
      if (lastVisitedPage && location.pathname === "/") {
        navigate(lastVisitedPage);
      }
    };
    checkSavedPath();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      chrome.storage.local.set({ lastVisitedPage: location.pathname });
    }
  }, [location.pathname]);

  return children;
}

export default App;
