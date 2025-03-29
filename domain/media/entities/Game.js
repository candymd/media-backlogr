import { MediaItem } from "./MediaItem";
import { validatePlatform } from "../services/validatePlatformTypes";

export class Game extends MediaItem {
  constructor({ id, title, status, platform }) {
    super({ id, title, status });
    validatePlatform(platform);
    this._platform = platform;
  }

  get platform() {
    return this._platform;
  }

  set platform(value) {
    validatePlatform(value);
    this._platform = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      platform: this._platform,
    };
  }
}
