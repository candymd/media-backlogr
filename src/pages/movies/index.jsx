import { useEffect, useState } from "react";
import { useUseCases } from "../../../application/context";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const { getAllMoviesUseCase } = useUseCases();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getAllMoviesUseCase.execute();
      setMovies(movies);
    };

    fetchMovies();
  }, [getAllMoviesUseCase]);

  return (
    <>
      <head>
        <title>Movies</title>
        <meta name="description" content="Movies" />
      </head>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}
