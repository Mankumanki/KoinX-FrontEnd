import { lazy } from "react";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { TrendingContextProvider } from "./Hooks/useTrendingContext";
const Home = lazy(() => import("./Pages/Home"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TrendingContextProvider>
                <Home />
              </TrendingContextProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
