import { MediaItem } from "./MediaItem";

export class Movie extends MediaItem {
  #director;
  #releaseYear;
  #genre;

  constructor({ id, title, status, director, releaseYear, genre }) {
    super({ id, title, status });
    this.#director = director;
    this.#releaseYear = releaseYear;
    this.#genre = genre;
  }

  get director() {
    return this.#director;
  }

  set director(value) {
    this.#director = value;
  }

  get releaseYear() {
    return this.#releaseYear;
  }

  set releaseYear(value) {
    this.#releaseYear = Number(value);
  }

  get genre() {
    return this.#genre;
  }

  set genre(value) {
    this.#genre = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      director: this.#director,
      releaseYear: this.#releaseYear,
      genre: this.#genre,
    };
  }
}
