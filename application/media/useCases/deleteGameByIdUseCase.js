export class DeleteGameByIdUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ id }) {
    if (!id) {
      throw new Error("MISSING_REQUIRED_FIELD");
    }

    return await this.#repository.deleteById({
      id,
    });
  }
}
