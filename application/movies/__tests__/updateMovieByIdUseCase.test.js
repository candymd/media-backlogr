import { beforeEach, describe, it, expect } from "vitest";
import { UpdateMovieByIdUseCase } from "../useCases/updateMovieByIdUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";
import { InMemoryMoviesRepository } from "../../../infrastructure/movies/InMemoryMoviesRepository";

describe("UpdateMovieByIdUseCase", () => {
  let movieRepository;
  let updateMovieByIdUseCase;

  beforeEach(() => {
    movieRepository = new InMemoryMoviesRepository();
    updateMovieByIdUseCase = new UpdateMovieByIdUseCase({
      repository: movieRepository,
    });
  });

  it("updates a movie with valid data", async () => {
    const movieData = {
      id: "1",
      title: "The Dark Knight - Updated",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action/Drama",
      multimedia: [
        {
          type: "image",
          url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
      ],
    };

    const updatedMovie = await updateMovieByIdUseCase.execute(movieData);

    expect(updatedMovie).toEqual(movieData);

    const allMovies = await movieRepository.getAll();
    expect(allMovies[0].toJSON()).toEqual(movieData);
  });

  it("throws an error when required fields are missing", async () => {
    const invalidMovieData = {
      id: "1",
      title: "The Dark Knight - Updated",
      status: MEDIA_STATUS_TYPES.COMPLETED,
    };

    await expect(
      updateMovieByIdUseCase.execute(invalidMovieData)
    ).rejects.toThrow("MISSING_REQUIRED_PARAMS");

    const allMovies = await movieRepository.getAll();
    expect(allMovies[0].toJSON()).toEqual({
      id: "1",
      title: "The Dark Knight",
      status: MEDIA_STATUS_TYPES.COMPLETED,
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

  it("throws an error when the movie does not exist", async () => {
    const nonExistingMovieData = {
      id: "999",
      title: "Non-Existing Movie",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Unknown Director",
      releaseYear: 2024,
      genre: "Unknown",
      multimedia: [
        {
          type: "image",
          url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
      ],
    };

    await expect(
      updateMovieByIdUseCase.execute(nonExistingMovieData)
    ).rejects.toThrow("NOT_FOUND_ERROR");
  });
});
