import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { UseCaseProvider } from "../application/context/UseCaseProvider";
import Home from "./pages/home/index";
import GamesPage from "./pages/games/index";
import MoviesPage from "./pages/movies/index";

function App() {
  return (
    <BrowserRouter>
      <UseCaseProvider>
        <>
          <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/movies">Movies</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </>
      </UseCaseProvider>
    </BrowserRouter>
  );
}

export default App;
