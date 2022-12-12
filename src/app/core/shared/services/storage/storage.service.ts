import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getItem(value: string): string {
    const item = localStorage.getItem(value);
    return item;
  }

  saveItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }
}
