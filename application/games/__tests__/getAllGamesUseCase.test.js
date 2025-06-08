import { beforeEach, describe, it, vi, expect } from "vitest";
import { GetAllGamesUseCase } from "../useCases/getAllGamesUseCase";
import { Game } from "../../../domain/media/entities/Game";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";

describe("GetAllGamesUseCase", () => {
  let mockGameRepository;
  let getAllGamesUseCase;

  beforeEach(() => {
    mockGameRepository = {
      getAll: vi.fn(),
    };

    getAllGamesUseCase = new GetAllGamesUseCase({
      repository: mockGameRepository,
    });
  });

  it("returns a valid list of games", async () => {
    mockGameRepository.getAll.mockResolvedValue([
      new Game({
        id: "123456",
        title: "My Awesome Game Title",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
          },
        ],
      }),
      new Game({
        id: "7891011",
        title: "My Other Game Title",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
          },
        ],
      }),
    ]);

    const allGames = await getAllGamesUseCase.execute();

    expect(allGames).toEqual([
      {
        id: "123456",
        title: "My Awesome Game Title",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
          },
        ],
      },
      {
        id: "7891011",
        title: "My Other Game Title",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
          },
        ],
      },
    ]);
  });
});
