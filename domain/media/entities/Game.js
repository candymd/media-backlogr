import { MediaItem } from "./MediaItem"; 

export class Game extends MediaItem {
  constructor({ id, title, status, platform }) {
    super({ id, title, status });
    this._platform = platform;
  }

  get platform() {
    return this._platform;
  }

  set platform(value) {
    this._platform = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      platform: this._platform,
    };
  }
}
