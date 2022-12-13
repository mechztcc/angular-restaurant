import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/shared/services/storage/storage.service';

@Component({
  selector: 'app-login-account-page',
  templateUrl: './login-account-page.component.html',
  styleUrls: ['./login-account-page.component.scss'],
})
export class LoginAccountPageComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.clearStorage();
  }
}
