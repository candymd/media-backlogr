import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DeleteGameByIdUseCase } from "../useCases/deleteGameByIdUseCase";

describe("DeleteGameByIdUseCase", () => {
  let mockGameRepository;
  let deleteGameByIdUseCase;

  beforeEach(() => {
    mockGameRepository = {
      deleteById: vi.fn(),
    };

    deleteGameByIdUseCase = new DeleteGameByIdUseCase({
      repository: mockGameRepository,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("deletes a game given a valid id", async () => {
    const gameId = "123456";

    await expect(
      deleteGameByIdUseCase.execute({ id: gameId })
    ).resolves.not.toThrow();

    expect(mockGameRepository.deleteById).toHaveBeenCalledWith({
      id: gameId,
    });
  });

  it("throws an error if the id is not provided", async () => {
    await expect(deleteGameByIdUseCase.execute({})).rejects.toThrow(
      "MISSING_REQUIRED_PARAMS"
    );

    expect(mockGameRepository.deleteById).not.toHaveBeenCalled();
  });

  it("throws an error if the game does not exist", async () => {
    const gameId = "999";

    mockGameRepository.deleteById.mockRejectedValue(
      new Error("NOT_FOUND_ERROR")
    );

    await expect(deleteGameByIdUseCase.execute({ id: gameId })).rejects.toThrow(
      "NOT_FOUND_ERROR"
    );

    expect(mockGameRepository.deleteById).toHaveBeenCalledWith({
      id: gameId,
    });
  });
});
