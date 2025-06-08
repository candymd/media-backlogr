import { beforeEach, describe, it, expect } from "vitest";
import { AddMovieUseCase } from "../useCases/addMovieUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";
import { InMemoryMoviesRepository } from "../../../infrastructure/movies/InMemoryMoviesRepository";

describe("AddMovieUseCase", () => {
  let movieRepository;
  let addMovieUseCase;

  beforeEach(() => {
    movieRepository = new InMemoryMoviesRepository();
    addMovieUseCase = new AddMovieUseCase({
      repository: movieRepository,
    });
  });

  it("adds a movie with valid data", async () => {
    const movieData = {
      title: "The Princess Bride",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "Comedy",
      multimedia: [
        {
          type: "image",
          url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
      ],
    };

    const addedMovie = await addMovieUseCase.execute(movieData);

    expect(addedMovie).toEqual({
      id: "7",
      title: "The Princess Bride",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "Comedy",
      multimedia: [
        {
          type: "image",
          url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
      ],
    });

    const allMovies = await movieRepository.getAll();
    expect(allMovies).toHaveLength(7);
    expect(allMovies[6].toJSON()).toEqual(addedMovie);
  });

  it("throws an error when required fields are missing", async () => {
    const invalidMovieData = {
      title: "The Princess Bride",
    };

    await expect(addMovieUseCase.execute(invalidMovieData)).rejects.toThrow(
      "MISSING_REQUIRED_PARAMS"
    );

    const allMovies = await movieRepository.getAll();
    expect(allMovies).toHaveLength(6);
  });
});
