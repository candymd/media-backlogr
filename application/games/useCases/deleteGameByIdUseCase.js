export class DeleteGameByIdUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ id }) {
    if (!id) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    return await this.#repository.deleteById({
      id,
    });
  }
}
