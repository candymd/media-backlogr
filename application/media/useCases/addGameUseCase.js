export class AddGameUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute({ title, status, platform }) {
    if (!title || !status || !platform) {
      throw new Error("Missing required fields");
    }

    const newGame = await this._repository.add({
      title,
      status,
      platform,
    });

    return newGame;
  }
}
