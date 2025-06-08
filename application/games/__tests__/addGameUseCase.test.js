import { beforeEach, describe, it, expect } from "vitest";
import { AddGameUseCase } from "../useCases/addGameUseCase";
import { MEDIA_STATUS_TYPES, PLATFORM_TYPES } from "../../../domain/config";
import { InMemoryGameRepository } from "../../../infrastructure/games/InMemoryGameRepository";

describe("AddGameUseCase", () => {
  let gameRepository;
  let addGameUseCase;

  beforeEach(() => {
    gameRepository = new InMemoryGameRepository();
    addGameUseCase = new AddGameUseCase({ repository: gameRepository });
  });

  it("adds a game", async () => {
    const gameData = {
      id: "11",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    };

    const addedGame = await addGameUseCase.execute(gameData);

    expect(addedGame).toEqual({
      id: "11",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    });

    const allGames = await gameRepository.getAll();
    expect(allGames).toHaveLength(11);
    expect(allGames[10]).toEqual(addedGame);
  });

  it("throws an error when required fields are missing", async () => {
    const invalidGameData = {
      id: "11",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: PLATFORM_TYPES.PC,
    };

    await expect(addGameUseCase.execute(invalidGameData)).rejects.toThrow(
      "MISSING_REQUIRED_PARAMS"
    );

    const allGames = await gameRepository.getAll();
    expect(allGames).toHaveLength(10);
  });
});
