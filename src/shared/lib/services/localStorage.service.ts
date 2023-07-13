class LocalStorageService {
  private readonly storage?: Storage;

  constructor() {
    try {
      if ('localStorage' in globalThis) {
        this.storage = window.localStorage;
      }
    } catch (e) {
      console.error(e);
    }
  }

  get length() {
    if (!this.storage) return;

    return this.storage.length;
  }

  get<T>(key: string) {
    if (!this.storage) return;

    try {
      const value = this.storage.getItem(key);
      if (value === null) return;

      return JSON.parse(value) as T;
    } catch (e) {
      console.error(e);
    }
  }

  set(key: string, value: unknown) {
    if (!this.storage) return;
    try {
      const stringValue = JSON.stringify(value);
      this.storage.setItem(key, stringValue);
    } catch (e) {
      console.error(e);
    }
  }

  remove(key: string) {
    if (!this.storage) return;

    this.storage.removeItem(key);
  }

  clear() {
    if (!this.storage) return;
    this.storage.clear();
  }
}

export const localStorageService = new LocalStorageService();
