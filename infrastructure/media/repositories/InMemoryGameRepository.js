import { Game } from "../../../domain/media/entities/Game";
import { MediaItemRepository } from "../../../domain/media/repositories/mediaItemRepository";
import { MEDIA_STATUS_TYPES } from "../../../domain/config/media";

export class InMemoryGameRepository extends MediaItemRepository {
  constructor() {
    super();
    this.games = [
      new Game({
        id: "1",
        title: "The Last of Us Part II",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
      }),
      new Game({
        id: "2",
        title: "Cyberpunk 2077",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PC",
      }),
      new Game({
        id: "3",
        title: "Red Dead Redemption 2",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PLAYSTATION",
      }),
      new Game({
        id: "4",
        title: "Halo Infinite",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PLAYSTATION",
      }),
      new Game({
        id: "5",
        title: "The Witcher 3",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
      }),
      new Game({
        id: "6",
        title: "Ghost of Tsushima",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
      }),
      new Game({
        id: "7",
        title: "Doom Eternal",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PC",
      }),
      new Game({
        id: "8",
        title: "Assassin's Creed Valhalla",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
      }),
      new Game({
        id: "9",
        title: "Gears 5",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PLAYSTATION",
      }),
      new Game({
        id: "10",
        title: "Resident Evil Village",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
      }),
    ];
  }

  async getAll() {
    return this.games;
  }

  async add(gameData) {
    const newGame = new Game(gameData);
    newGame.id = (this.games.length + 1).toString();
    this.games.push(newGame);
    return newGame;
  }
}
