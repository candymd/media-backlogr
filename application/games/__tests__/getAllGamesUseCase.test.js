import { beforeEach, describe, it, expect } from "vitest";
import { GetAllGamesUseCase } from "../useCases/getAllGamesUseCase";
import { InMemoryGameRepository } from "../../../infrastructure/games/InMemoryGameRepository";

describe("GetAllGamesUseCase", () => {
  let gameRepository;
  let getAllGamesUseCase;

  beforeEach(() => {
    gameRepository = new InMemoryGameRepository();
    getAllGamesUseCase = new GetAllGamesUseCase({
      repository: gameRepository,
    });
  });

  it("returns all games from the repository", async () => {
    const allGames = await getAllGamesUseCase.execute();

    expect(allGames).toHaveLength(10);

    expect(allGames[0]).toEqual({
      id: "1",
      title: "The Last of Us Part II",
      status: "in_progress",
      platform: "PC",
      multimedia: [
        {
          type: "image",
          url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
        },
      ],
    });
  });

  it("returns empty array when repository is empty", async () => {
    gameRepository.games = [];

    const allGames = await getAllGamesUseCase.execute();
    expect(allGames).toEqual([]);
  });
});
