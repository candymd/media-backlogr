export class AddGameUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute(gameData) {
    if (!gameData.title || !gameData.status || !gameData.platform) {
      throw new Error("Missing required fields");
    }

    try {
      await this._repository.add(gameData);
    } catch {
      throw new Error("Failed to add game");
    }
  }
}
