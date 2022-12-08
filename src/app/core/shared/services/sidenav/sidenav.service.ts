import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  isClosed: boolean = true;

  constructor() {}

  handleDrawer() {
    this.isClosed = !this.isClosed;
  }
}
