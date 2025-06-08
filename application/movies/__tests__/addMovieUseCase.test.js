import { beforeEach, describe, it, vi, expect, afterEach } from "vitest";
import { AddMovieUseCase } from "../useCases/addMovieUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";

describe("AddMovieUseCase", () => {
  let addMovieUseCase;
  let mockMovieRepository;

  beforeEach(() => {
    mockMovieRepository = {
      add: vi.fn(),
    };

    addMovieUseCase = new AddMovieUseCase({
      repository: mockMovieRepository,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("adds a movie with valid data", async () => {
    mockMovieRepository.add.mockResolvedValue({
      id: "123456",
      title: "The Princess Bride",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "Comedy",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
        },
      ],
    });

    const movieData = {
      id: "123456",
      title: "The Princess Bride",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "My Awesome Genre",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
        },
      ],
    };

    const addedMovie = await addMovieUseCase.execute(movieData);

    expect(addedMovie).toEqual({
      id: "123456",
      title: "The Princess Bride",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "Comedy",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
        },
      ],
    });
  });

  it("throws an error if the title is missing", async () => {
    const movieData = {
      id: "123456",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Rob Reiner",
      releaseYear: 1987,
      genre: "Comedy",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
        },
      ],
    };

    await expect(addMovieUseCase.execute(movieData)).rejects.toThrow(
      "MISSING_REQUIRED_PARAMS"
    );

    expect(mockMovieRepository.add).not.toHaveBeenCalled();
  });
});
