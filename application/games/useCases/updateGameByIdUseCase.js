export class UpdateGameByIdUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ id, title, status, platform }) {
    if (!id || !title || !status || !platform) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    return await this.#repository.updateById({
      id,
      title,
      status,
      platform,
    });
  }
}
