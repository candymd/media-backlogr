import { beforeEach, describe, it, vi, expect, afterEach } from "vitest";
import { UpdateMovieByIdUseCase } from "../useCases/updateMovieByIdUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";

describe("UpdateMovieByIdUseCase", () => {
  let mockMovieRepository;
  let updateMovieByIdUseCase;

  beforeEach(() => {
    mockMovieRepository = {
      updateById: vi.fn(),
    };

    updateMovieByIdUseCase = new UpdateMovieByIdUseCase({
      repository: mockMovieRepository,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("updates a movie with valid data", async () => {
    const movieData = {
      id: "123456",
      title: "The Godfather",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      genre: "Crime Drama",
    };

    mockMovieRepository.updateById.mockResolvedValue(movieData);

    const updatedMovie = await updateMovieByIdUseCase.execute(movieData);

    expect(updatedMovie).toEqual(movieData);
    expect(mockMovieRepository.updateById).toHaveBeenCalledWith(movieData);
  });

  it("throws an error if the movie does not exist", async () => {
    const movieData = {
      id: "999",
      title: "Non-Existing Movie",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Unknown Director",
      releaseYear: 2024,
      genre: "Unknown",
    };

    mockMovieRepository.updateById.mockRejectedValue(
      new Error("NOT_FOUND_ERROR")
    );

    await expect(updateMovieByIdUseCase.execute(movieData)).rejects.toThrow(
      "NOT_FOUND_ERROR"
    );

    expect(mockMovieRepository.updateById).toHaveBeenCalledWith(movieData);
  });
});
