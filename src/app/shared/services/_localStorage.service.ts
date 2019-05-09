import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  get(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error(e);
    }
  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }

}
