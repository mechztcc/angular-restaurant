import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/shared/services/storage/storage.service';
@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
})
export class CreateAccountPageComponent implements OnInit {
  isCollapsed = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.clearStorage();
  }
}
