export class AddMovieUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ title, status, director, releaseYear, genre, multimedia }) {
    if (!title || !status || !director || !releaseYear || !genre) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    const movie = await this.#repository.add({
      title,
      status,
      director,
      releaseYear,
      genre,
      multimedia,
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
      multimedia: movie.multimedia,
    };
  }
}
