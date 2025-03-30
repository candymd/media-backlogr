import { beforeEach, describe, it, vi, expect, afterEach } from "vitest";
import { UpdateGameByIdUseCase } from "../useCases/updateGameByIdUseCase";
import { MEDIA_STATUS_TYPES, PLATFORM_TYPES } from "../../../domain/config";

describe("UpdateGameByIdUseCase", () => {
  let mockGameRepository;
  let updateGameByIdUseCase;

  beforeEach(() => {
    mockGameRepository = {
      updateById: vi.fn(),
    };

    updateGameByIdUseCase = new UpdateGameByIdUseCase({
      repository: mockGameRepository,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("updates a game by id and returns it", async () => {
    const gameData = {
      id: "123456",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: PLATFORM_TYPES.PC,
    };

    mockGameRepository.updateById.mockResolvedValue(gameData);

    const updatedGame = await updateGameByIdUseCase.execute(gameData);

    expect(updatedGame).toEqual(gameData);
    expect(mockGameRepository.updateById).toHaveBeenCalledWith(gameData);
  });

  it("should throw an error if the game does not exist", async () => {
    const updatedGameData = {
      id: "999",
      title: "Non-Existing Game",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
    };

    mockGameRepository.updateById.mockRejectedValue(
      new Error("NOT_FOUND_ERROR")
    );

    await expect(
      updateGameByIdUseCase.execute(updatedGameData)
    ).rejects.toThrow("NOT_FOUND_ERROR");

    expect(mockGameRepository.updateById).toHaveBeenCalledWith(updatedGameData);
  });
});
