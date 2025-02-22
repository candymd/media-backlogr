export class GetAllGamesUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute() {
    const allGames = await this._repository.getAll();
    return allGames.map((game) => game.toJSON());
  }
}
