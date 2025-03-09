export class AddGameUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute(gameData) {
    if (!gameData.title || !gameData.status || !gameData.platform) {
      throw new Error("Missing required fields: title, status, platform");
    }

    return this._repository.add(gameData);
  }
}
