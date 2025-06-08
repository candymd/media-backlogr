import { MediaItemRepository } from "../../domain/media/repositories/mediaItemRepository";
import { API_URL } from "../../domain/config";
import { Movie } from "../../domain/media/entities/Movie";

export class HttpMoviesRepository extends MediaItemRepository {
  #httpFetcher;

  constructor({ httpFetcher } = {}) {
    super();
    this.#httpFetcher = httpFetcher || fetch;
  }

  async getAll() {
    try {
      const { data } = await this.#httpFetcher.get(`${API_URL}/movies`);
      return data.map((movie) =>
        this.fromJsonMovieResponseToDomainMovie(movie)
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async add({ title, status, director, releaseYear, genre, multimedia }) {
    try {
      const { data } = await this.#httpFetcher.post(`${API_URL}/movies`, {
        title,
        status,
        director,
        releaseYear,
        genre,
        multimedia,
      });

      return this.fromJsonMovieResponseToDomainMovie(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById({
    id,
    title,
    status,
    director,
    releaseYear,
    genre,
    multimedia,
  }) {
    try {
      const { data } = await this.#httpFetcher.put(`${API_URL}/movies/${id}`, {
        title,
        status,
        director,
        releaseYear,
        genre,
        multimedia,
      });

      return this.fromJsonMovieResponseToDomainMovie(data);
    } catch (error) {
      if (error.status === 404) {
        throw new Error("NOT_FOUND_ERROR");
      }

      throw new Error(error);
    }
  }

  async deleteById({ id }) {
    try {
      await this.#httpFetcher.delete(`${API_URL}/movies/${id}`);
    } catch (error) {
      if (error.status === 404) {
        throw new Error("NOT_FOUND_ERROR");
      }

      throw new Error(error);
    }
  }

  fromJsonMovieResponseToDomainMovie(movie) {
    return new Movie({
      id: movie.id,
      title: movie.title,
      status: movie.status,
      director: movie.director,
      releaseYear: movie.releaseYear,
      genre: movie.genre,
      multimedia: movie.multimedia,
    });
  }
}
