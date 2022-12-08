import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}


}
