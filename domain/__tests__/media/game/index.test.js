import { describe, it, expect } from "vitest";
import { Game } from "../../../media/entities/Game";
import { MEDIA_STATUS_TYPES } from "../../../config";

describe("Game", () => {
  it("returns a valid game object", () => {
    const cyberpunk = new Game({
      id: "123456",
      title: "Cyberpunk 2027",
      status: MEDIA_STATUS_TYPES.IN_BACKLOG,
      platform: "PC",
    });

    expect(cyberpunk).toHaveProperty("id");
    expect(cyberpunk).toHaveProperty("title");
    expect(cyberpunk).toHaveProperty("status");
    expect(cyberpunk).toHaveProperty("platform");
    expect(cyberpunk.toJSON()).toEqual({
      id: "123456",
      title: "Cyberpunk 2027",
      status: "in_backlog",
      platform: "PC",
    });
  });
});
