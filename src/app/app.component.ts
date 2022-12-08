import { Component } from '@angular/core';
import { StorageService } from './core/shared/services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-restaurant';

  constructor(public storageService: StorageService) {}


}
