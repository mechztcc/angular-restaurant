import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService implements OnInit {
  closed: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleDrawer() {
    this.closed = !this.closed;
  }
}
