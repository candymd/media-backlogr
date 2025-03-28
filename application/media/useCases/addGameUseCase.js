export class AddGameUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute(gameData) {
    if (!gameData.title || !gameData.status || !gameData.platform) {
      throw new Error("Missing required fields");
    }

    const newGame = await this._repository.add(gameData);

    if (!newGame) {
      throw new Error("Failed to add game");
    }

    return newGame;
  }
}
