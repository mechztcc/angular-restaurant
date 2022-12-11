import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
