import { beforeEach, describe, it, expect } from "vitest";
import { UpdateGameByIdUseCase } from "../useCases/updateGameByIdUseCase";
import { MEDIA_STATUS_TYPES, PLATFORM_TYPES } from "../../../domain/config";
import { InMemoryGameRepository } from "../../../infrastructure/games/InMemoryGameRepository";

describe("UpdateGameByIdUseCase", () => {
  let gameRepository;
  let updateGameByIdUseCase;

  beforeEach(() => {
    gameRepository = new InMemoryGameRepository();
    updateGameByIdUseCase = new UpdateGameByIdUseCase({
      repository: gameRepository,
    });
  });

  it("updates a game by id and returns it", async () => {
    const gameData = {
      id: "1",
      title: "The Last of Us Part II - Updated",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: PLATFORM_TYPES.PC,
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    };

    const updatedGame = await updateGameByIdUseCase.execute(gameData);

    expect(updatedGame).toEqual(gameData);

    const allGames = await gameRepository.getAll();
    expect(allGames[0]).toEqual(gameData);
  });

  it("throws an error when required fields are missing", async () => {
    const invalidGameData = {
      id: "1",
      title: "The Last of Us Part II - Updated",
    };

    await expect(
      updateGameByIdUseCase.execute(invalidGameData)
    ).rejects.toThrow("MISSING_REQUIRED_PARAMS");

    const allGames = await gameRepository.getAll();
    expect(allGames[0]).toEqual({
      id: "1",
      title: "The Last of Us Part II",
      status: MEDIA_STATUS_TYPES.IN_PROGRESS,
      platform: "PC",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    });
  });

  it("throws an error when the game does not exist", async () => {
    const nonExistingGameData = {
      id: "999",
      title: "Non-Existing Game",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: PLATFORM_TYPES.PC,
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    };

    await expect(
      updateGameByIdUseCase.execute(nonExistingGameData)
    ).rejects.toThrow("NOT_FOUND_ERROR");
  });
});
