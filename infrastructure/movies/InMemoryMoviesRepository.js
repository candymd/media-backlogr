import { MediaItemRepository } from "../../domain/media/repositories/mediaItemRepository";
import { Movie } from "../../domain/media/entities/Movie";
import { MEDIA_STATUS_TYPES } from "../../domain/config";

export class InMemoryMoviesRepository extends MediaItemRepository {
  constructor() {
    super();
    this.movies = [
      new Movie({
        id: "1",
        title: "The Dark Knight",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "Action",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
          },
        ],
      }),
      new Movie({
        id: "2",
        title: "Pride and Prejudice",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        director: "Joe Wright",
        releaseYear: 2006,
        genre: "Drama",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/kMWyqBJPgQCZOhU8C8VcqwcQ3Fk.jpg`,
          },
        ],
      }),
      new Movie({
        id: "3",
        title: "The Lord of the Rings: The Return of the King",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: "Adventure",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg`,
          },
        ],
      }),
      new Movie({
        id: "4",
        title: "The Matrix",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "The Wachowskis",
        releaseYear: 1999,
        genre: "Action",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`,
          },
        ],
      }),
      new Movie({
        id: "5",
        title: "The Godfather",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`,
          },
        ],
      }),
      new Movie({
        id: "6",
        title: "Ponyo",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "Hayao Miyazaki",
        releaseYear: 2008,
        genre: "Animation",
        multimedia: [
          {
            type: "image",
            url: `https://image.tmdb.org/t/p/w500/yp8vEZflGynlEylxEesbYasc06i.jpg`,
          },
        ],
      }),
    ];
  }

  async getAll() {
    return this.movies;
  }

  async add({ title, status, director, releaseYear, genre }) {
    const movieData = {
      id: (this.movies.length + 1).toString(),
      title,
      status,
      director,
      releaseYear,
      genre,
    };

    const newMovie = new Movie(movieData);
    this.movies.push(newMovie);
    return newMovie;
  }
}
