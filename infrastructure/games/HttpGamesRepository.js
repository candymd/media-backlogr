import axios from "axios";
import { MediaItemRepository } from "../../domain/media/repositories/mediaItemRepository";
import { API_URL } from "../../domain/config";

export class HttpGamesRepository extends MediaItemRepository {
  async getAll() {
    try {
      const { data } = await axios.get(`${API_URL}/games`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async add({ title, status, platform }) {
    try {
      const { data } = await axios.post(`${API_URL}/games`, {
        title,
        status,
        platform,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, title, status, platform }) {
    // TODO: Implement
  }

  async delete({ id }) {
    // TODO: Implement
  }
}
