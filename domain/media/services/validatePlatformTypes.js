import { PLATFORM_TYPES } from "../../config/index.js";

export function validatePlatform(platform) {
  if (!Object.values(PLATFORM_TYPES).includes(platform)) {
    throw new Error("INVALID_PLATFORM");
  }
}
