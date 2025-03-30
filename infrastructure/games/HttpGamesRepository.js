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
      const newGame = await this.#httpFetcher.post(`${API_URL}/games`, {
        title,
        status,
        platform,
      });

      return this.fromJsonGameResponseToDomainGame(newGame);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById({ id, title, status, platform }) {
    try {
      const updatedGame = await this.#httpFetcher.put(
        `${API_URL}/games/${id}`,
        {
          title,
          status,
          platform,
        }
      );

      return this.fromJsonGameResponseToDomainGame(updatedGame);
    } catch (error) {
      if (error.status === 400) {
        throw new Error("NOT_FOUND_ERROR");
      }

      throw new Error(error);
    }
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
