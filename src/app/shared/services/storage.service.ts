import { Injectable } from '@angular/core';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  items = {};

  constructor() { }

  getItem(key: string) {
    return this.items[key];
  }

  setItem(key: string, item: any) {
    this.items[key] = item;
  }

  removeItem(key) {
    delete this.items[key];
  }
}
