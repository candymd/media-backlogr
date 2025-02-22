import { beforeEach, describe, it, vi, expect } from "vitest";
import { GetAllGamesUseCase } from "../useCases/getAllGamesUseCase";
import { Game } from "../../../domain/media/entities/Game";
import { MEDIA_STATUS_TYPES } from "../../../domain/config/media";

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
      }),
      new Game({
        id: "7891011",
        title: "My Other Game Title",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
      }),
    ]);

    const allGames = await getAllGamesUseCase.execute();

    expect(allGames).toEqual([
      {
        id: "123456",
        title: "My Awesome Game Title",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
      },
      {
        id: "7891011",
        title: "My Other Game Title",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
      },
    ]);
  });
});
