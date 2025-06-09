import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UseCaseProvider } from "../application/context/UseCaseProvider";
import Home from "./pages/home/index";
import GamesPage from "./pages/games/index";
import MoviesPage from "./pages/movies/index";
import Topbar from "./components/shared/topbar/index";

function App() {
  return (
    <BrowserRouter>
      <UseCaseProvider>
        <>
          <Topbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/movies" element={<MoviesPage />} />
            </Routes>
          </main>
        </>
      </UseCaseProvider>
    </BrowserRouter>
  );
}

export default App;
