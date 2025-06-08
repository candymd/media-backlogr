export class AddGameUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ title, status, platform }) {
    if (!title || !status || !platform) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    return await this.#repository.add({
      title,
      status,
      platform,
    });
  }
}
