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
      }),
      new Movie({
        id: "2",
        title: "Pride and Prejudice",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        director: "Joe Wright",
        releaseYear: 2005,
        genre: "Drama",
      }),
      new Movie({
        id: "3",
        title: "The Lord of the Rings: The Return of the King",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: "Adventure",
      }),
      new Movie({
        id: "4",
        title: "The Matrix",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "The Wachowskis",
        releaseYear: 1999,
        genre: "Action",
      }),
      new Movie({
        id: "5",
        title: "The Godfather",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime",
      }),
      new Movie({
        id: "6",
        title: "Ponyo",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        director: "Hayao Miyazaki",
        releaseYear: 2008,
        genre: "Animation",
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
