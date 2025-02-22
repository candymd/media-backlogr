import { validateStatus } from "../services/validateStatusTypes";

export class MediaItem {
  constructor({ id, title, status }) {
    this._id = id;
    this._title = title;
    validateStatus(status);
    this._status = status;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get status() {
    return this._status;
  }

  set id(value) {
    this._id = value;
  }

  set title(value) {
    this._title = value;
  }

  set status(value) {
    validateStatus(value);
    this._status = value;
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title,
      status: this._status,
    };
  }
}
