import { Game } from "../../domain/media/entities/Game";
import { MediaItemRepository } from "../../domain/media/repositories/MediaItemRepository";
import { MEDIA_STATUS_TYPES } from "../../domain/config";

export class InMemoryGameRepository extends MediaItemRepository {
  constructor() {
    super();
    this.games = [
      new Game({
        id: "1",
        title: "The Last of Us Part II",
        status: MEDIA_STATUS_TYPES.IN_PROGRESS,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
          },
        ],
      }),
      new Game({
        id: "2",
        title: "Cyberpunk 2077",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.jpg",
          },
        ],
      }),
      new Game({
        id: "3",
        title: "Red Dead Redemption 2",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PLAYSTATION_5",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
          },
        ],
      }),
      new Game({
        id: "4",
        title: "Halo Infinite",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PLAYSTATION_5",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.jpg",
          },
        ],
      }),
      new Game({
        id: "5",
        title: "The Witcher 3",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
          },
        ],
      }),
      new Game({
        id: "6",
        title: "Ghost of Tsushima",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2crj.jpg",
          },
        ],
      }),
      new Game({
        id: "7",
        title: "Doom Eternal",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.jpg",
          },
        ],
      }),
      new Game({
        id: "8",
        title: "Assassin's Creed Valhalla",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.jpg",
          },
        ],
      }),
      new Game({
        id: "9",
        title: "Gears 5",
        status: MEDIA_STATUS_TYPES.IN_BACKLOG,
        platform: "PLAYSTATION_5",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg",
          },
        ],
      }),
      new Game({
        id: "10",
        title: "Resident Evil Village",
        status: MEDIA_STATUS_TYPES.COMPLETED,
        platform: "PC",
        multimedia: [
          {
            type: "image",
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2x65.jpg",
          },
        ],
      }),
    ];
  }

  async getAll() {
    return this.games.map((game) => this.toJSON(game));
  }

  async add({ title, status, platform, multimedia }) {
    if (!title || !status || !platform || !multimedia) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    const gameData = {
      id: (this.games.length + 1).toString(),
      title,
      status,
      platform,
      multimedia,
    };

    const newGame = new Game(gameData);
    this.games.push(newGame);
    return this.toJSON(newGame);
  }

  async updateById({ id, title, status, platform, multimedia }) {
    if (!id || !title || !status || !platform || !multimedia) {
      throw new Error("MISSING_REQUIRED_PARAMS");
    }

    const game = this.games.find((game) => game.id === id);
    if (!game) {
      throw new Error("NOT_FOUND_ERROR");
    }
    game.title = title;
    game.status = status;
    game.platform = platform;
    game.multimedia = multimedia;
    return this.toJSON(game);
  }

  async deleteById({ id }) {
    const game = this.games.find((game) => game.id === id);
    if (!game) {
      throw new Error("NOT_FOUND_ERROR");
    }
    this.games = this.games.filter((game) => game.id !== id);
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
