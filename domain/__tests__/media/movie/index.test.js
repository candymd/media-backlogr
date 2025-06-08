import { describe, it, expect } from "vitest";
import { Movie } from "../../../media/entities/Movie";
import { MEDIA_STATUS_TYPES } from "../../../config";

describe("Movie", () => {
  it("returns a valid movie object", () => {
    const darkKnight = new Movie({
      id: "123456",
      title: "The Dark Knight",
      status: MEDIA_STATUS_TYPES.COMPLETED,
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action",
    });

    expect(darkKnight).toHaveProperty("id");
    expect(darkKnight).toHaveProperty("title");
    expect(darkKnight).toHaveProperty("status");
    expect(darkKnight).toHaveProperty("director");
    expect(darkKnight).toHaveProperty("releaseYear");
    expect(darkKnight).toHaveProperty("genre");
    expect(darkKnight.toJSON()).toEqual({
      id: "123456",
      title: "The Dark Knight",
      status: "completed",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action",
    });
  });
});
