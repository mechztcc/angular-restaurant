import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}
}
