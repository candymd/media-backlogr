export class GetAllMoviesUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute() {
    const movies = await this.#repository.getAll();

    if (!movies) {
      throw new Error("Failed to retrieve movies");
    }

    return movies.map((movie) => this.toJSON(movie));
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
