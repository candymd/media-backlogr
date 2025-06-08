export class AddGameUseCase {
  #repository;

  constructor({ repository }) {
    this.#repository = repository;
  }

  async execute({ title, status, platform, multimedia }) {
    if (!title || !status || !platform) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    const game = await this.#repository.add({
      title,
      status,
      platform,
      multimedia,
    });

    return this.toJSON(game);
  }

  toJSON(game) {
    return {
      id: game.id,
      title: game.title,
      status: game.status,
      platform: game.platform,
      multimedia: game.multimedia,
    };
  }
}
