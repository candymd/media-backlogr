import { validateStatus } from "../services/validateStatusTypes";

export class MediaItem {
  #id;
  #title;
  #status;

  constructor({ id, title, status }) {
    this.#id = id;
    this.#title = title;
    validateStatus(status);
    this.#status = status;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get status() {
    return this.#status;
  }

  set id(value) {
    this.#id = value;
  }

  set title(value) {
    this.#title = value;
  }

  set status(value) {
    validateStatus(value);
    this.#status = value;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      status: this.#status,
    };
  }
}
