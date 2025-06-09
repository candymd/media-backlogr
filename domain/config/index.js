export const MEDIA_STATUS_TYPES = {
  COMPLETED: "completed",
  IN_BACKLOG: "in_backlog",
  IN_PROGRESS: "in_progress",
};

export const PLATFORM_TYPES = {
  PC: "PC",
  PLAYSTATION_5: "PLAYSTATION_5",
  XBOX: "XBOX",
};

export const MEDIA_TYPES = {
  GAME: "game",
  MOVIE: "movie",
};

export const mapPlatformToLabel = (platform) => {
  switch (platform) {
    case PLATFORM_TYPES.PC:
      return "PC";
    case PLATFORM_TYPES.PLAYSTATION_5:
      return "PS5";
    case PLATFORM_TYPES.XBOX:
      return "Xbox";
  }
};

export const API_URL = "http://localhost:8080";
