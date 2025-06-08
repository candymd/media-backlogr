import { beforeEach, describe, it, vi, expect } from "vitest";
import { DeleteMovieByIdUseCase } from "../useCases/deleteMovieByIdUseCase";

describe("DeleteMovieByIdUseCase", () => {
  let mockMovieRepository;
  let deleteMovieByIdUseCase;

  beforeEach(() => {
    mockMovieRepository = {
      deleteById: vi.fn(),
    };

    deleteMovieByIdUseCase = new DeleteMovieByIdUseCase({
      repository: mockMovieRepository,
    });
  });

  it("deletes a movie by id", async () => {
    const movieId = "123";
    mockMovieRepository.deleteById.mockResolvedValue({ id: movieId });

    const result = await deleteMovieByIdUseCase.execute({ id: movieId });

    expect(result).toEqual({ id: movieId });
    expect(mockMovieRepository.deleteById).toHaveBeenCalledWith({
      id: movieId,
    });
  });

  it("throws an error when id is not provided", async () => {
    await expect(deleteMovieByIdUseCase.execute({})).rejects.toThrow(
      "MISSING_REQUIRED_PARAMS"
    );
  });
});
