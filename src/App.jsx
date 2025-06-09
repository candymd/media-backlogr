import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UseCaseProvider } from "../application/context/UseCaseProvider";
import Home from "./pages/home/index";
import GamesPage from "./pages/games/index";
import MoviesPage from "./pages/movies/index";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <UseCaseProvider>
        <>
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/movies" element={<MoviesPage />} />
            </Routes>
          </div>
        </>
      </UseCaseProvider>
    </BrowserRouter>
  );
}

export default App;
