import { beforeEach, describe, it, vi, expect } from "vitest";
import { GetAllMoviesUseCase } from "../useCases/getAllMoviesUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";

describe("GetAllMoviesUseCase", () => {
  let mockMovieRepository;
  let getAllMoviesUseCase;

  beforeEach(() => {
    mockMovieRepository = {
      getAll: vi.fn(),
    };

    getAllMoviesUseCase = new GetAllMoviesUseCase({
      repository: mockMovieRepository,
    });
  });

  it("gets all movies", async () => {
    const mockMovies = [
      {
        id: "123456",
        title: "The Matrix",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        releaseYear: 1999,
      },
      {
        id: "789012",
        title: "Inception",
        status: MEDIA_STATUS_TYPES.PENDING,
        releaseYear: 2010,
      },
    ];

    mockMovieRepository.getAll.mockResolvedValue(mockMovies);

    const movies = await getAllMoviesUseCase.execute();

    expect(movies).toEqual(mockMovies);
    expect(mockMovieRepository.getAll).toHaveBeenCalledTimes(1);
  });
});
