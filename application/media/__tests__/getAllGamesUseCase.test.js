import { beforeEach, describe, it, vi, expect } from "vitest";
import { GetAllGamesUseCase } from "../useCases/getAllGamesUseCase";

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
      { id: "1", title: "Game 1", status: "in_backlog" },
      { id: "2", title: "Game 2", status: "completed" },
    ]);

    const games = await getAllGamesUseCase.execute();
    expect(games).toEqual([
      { id: "1", title: "Game 1", status: "in_backlog" },
      { id: "2", title: "Game 2", status: "completed" },
    ]);
    expect(mockGameRepository.getAll).toHaveBeenCalledOnce();
  });
});
