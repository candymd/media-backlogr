export class UpdateMovieByIdUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ id, title, status, director, releaseYear, genre }) {
    const movie = await this.#repository.updateById({
      id,
      title,
      status,
      director,
      releaseYear,
      genre,
    });

    return this.toJSON(movie);
  }

  toJSON(movie) {
    return {
      id: movie.id,
      title: movie.title,
      status: movie.status,
      director: movie.director,
      releaseYear: movie.releaseYear,
      genre: movie.genre,
    };
  }
}
