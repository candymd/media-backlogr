export class GetAllGamesUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute() {
    const allGames = await this._repository.getAll();

    if (!allGames) {
      throw new Error("Failed to retrieve games");
    }

    return allGames.map((game) => this.toJSON(game));
  }

  toJSON(game) {
    return {
      id: game.id,
      title: game.title,
      status: game.status,
      platform: game.platform,
    };
  }
}
