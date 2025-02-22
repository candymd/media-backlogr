export class GetAllGamesUseCase {
  constructor({ repository }) {
    this._repository = repository;
  }

  async execute() {
    return await this._repository.getAll();
  }
}
