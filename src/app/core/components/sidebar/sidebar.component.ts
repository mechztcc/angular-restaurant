import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}
}
