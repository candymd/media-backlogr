import { beforeEach, describe, it, expect } from "vitest";
import { GetAllMoviesUseCase } from "../useCases/getAllMoviesUseCase";
import { InMemoryMoviesRepository } from "../../../infrastructure/movies/InMemoryMoviesRepository";

describe("GetAllMoviesUseCase", () => {
  let movieRepository;
  let getAllMoviesUseCase;

  beforeEach(() => {
    movieRepository = new InMemoryMoviesRepository();
    getAllMoviesUseCase = new GetAllMoviesUseCase({
      repository: movieRepository,
    });
  });

  it("returns all movies from the repository", async () => {
    const allMovies = await getAllMoviesUseCase.execute();

    expect(allMovies).toHaveLength(6);

    expect(allMovies[0]).toEqual({
      id: "1",
      title: "The Dark Knight",
      status: "completed",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action",
      multimedia: [
        {
          type: "image",
          url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
      ],
    });
  });

  it("returns empty array when repository is empty", async () => {
    movieRepository.movies = [];

    const allMovies = await getAllMoviesUseCase.execute();
    expect(allMovies).toEqual([]);
  });
});
