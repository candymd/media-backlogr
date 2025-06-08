import { beforeEach, describe, it, vi, expect } from "vitest";
import { AddGameUseCase } from "../useCases/addGameUseCase";
import { MEDIA_STATUS_TYPES } from "../../../domain/config";

describe("AddGameUseCase", () => {
  let mockGameRepository;
  let addGameUseCase;

  beforeEach(() => {
    mockGameRepository = {
      add: vi.fn(),
    };

    addGameUseCase = new AddGameUseCase({ repository: mockGameRepository });
  });

  it("adds a game", async () => {
    mockGameRepository.add.mockResolvedValue({
      id: "123456",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
    });

    const gameData = {
      id: "123456",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
    };

    const addedGame = await addGameUseCase.execute(gameData);

    expect(addedGame).toEqual({
      id: "123456",
      title: "My Awesome Game Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      platform: "PC",
    });
  });
});
