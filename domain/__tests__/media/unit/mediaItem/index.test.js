import { describe, it, expect } from "vitest";
import { MediaItem } from "../../../../media/entities/mediaItem";
import { MEDIA_STATUS_TYPES } from "../../../../config/media";

describe("MediaItem", () => {
  it("returns a valid mediaItem object", () => {
    const mediaItem = new MediaItem({
      id: "123456",
      title: "My Awesome Media Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
    });

    expect(mediaItem).toHaveProperty("id");
    expect(mediaItem).toHaveProperty("title");
    expect(mediaItem).toHaveProperty("status");
    expect(mediaItem.toJSON()).toEqual({
      id: "123456",
      title: "My Awesome Media Title",
      status: MEDIA_STATUS_TYPES.COMPLETED,
    });
  });

  it("throws an error when creating a mediaItem object with an invalid status", () => {
    expect(() => {
      new MediaItem({
        id: "123456",
        title: "My Awesome Media Title",
        status: "invalid_status",
      });
    }).toThrow(/INVALID_STATUS/);
  });
});
