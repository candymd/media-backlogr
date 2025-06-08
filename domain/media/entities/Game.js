import { MediaItem } from "./MediaItem";
import { validatePlatform } from "../services/validatePlatformTypes";

export class Game extends MediaItem {
  #platform;

  constructor({ id, title, status, platform, multimedia }) {
    super({ id, title, status, multimedia });
    validatePlatform(platform);
    this.#platform = platform;
  }

  get platform() {
    return this.#platform;
  }

  set platform(value) {
    validatePlatform(value);
    this.#platform = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      platform: this.#platform,
    };
  }
}
