/* eslint-disable no-unused-vars */
import { MediaItemRepository } from "../../domain/media/repositories/mediaItemRepository";
import { API_URL } from "../../domain/config";
import { Game } from "../../domain/media/entities/Game";

export class HttpGamesRepository extends MediaItemRepository {
  #httpFetcher;

  constructor({ httpFetcher } = {}) {
    super();
    this.#httpFetcher = httpFetcher || fetch;
  }

  async getAll() {
    try {
      const { data } = await this.#httpFetcher.get(`${API_URL}/games`);

      return data.map((game) => this.fromJsonGameResponseToDomainGame(game));
    } catch (error) {
      throw new Error(error);
    }
  }

  async add({ title, status, platform }) {
    try {
      await this.#httpFetcher.post(`${API_URL}/games`, {
        title,
        status,
        platform,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById({ id, title, status, platform }) {
    // TODO: Implement
  }

  async deleteById({ id }) {
    // TODO: Implement
  }

  fromJsonGameResponseToDomainGame(game) {
    return new Game({
      id: game.id,
      title: game.title,
      status: game.status,
      platform: game.platform,
    });
  }
}
