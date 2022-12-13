import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService implements OnInit {
  closed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleDrawer() {
    this.closed = !this.closed;
  }
}
