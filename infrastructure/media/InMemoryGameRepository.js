import { Game } from "../../domain/media/entities/Game";
import { MediaItemRepository } from "../../domain/media/repositories/mediaItemRepository";

export class InMemoryGameRepository extends MediaItemRepository {
  async getAll() {
    return [
      new Game("1", "The Last of Us Part II", "completed", "PC"),
      new Game("2", "Ghost of Tsushima", "in_backlog", "PC"),
      new Game("3", "Ghost of Tsushima", "in_backlog", "PC"),
      new Game("4", "Ghost of Tsushima", "in_backlog", "PC"),
      new Game("5", "Ghost of Tsushima", "in_backlog", "PC"),
    ];
  }
}
