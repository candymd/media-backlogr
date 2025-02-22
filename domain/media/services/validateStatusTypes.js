import { MEDIA_STATUS_TYPES } from "../../config/media/index.js";

export function validateStatus(status) {
  if (!Object.values(MEDIA_STATUS_TYPES).includes(status)) {
    throw new Error("INVALID_STATUS");
  }
}
