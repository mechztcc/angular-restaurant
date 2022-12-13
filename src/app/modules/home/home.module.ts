import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { octArchive } from '@ng-icons/octicons';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgIconsModule.withIcons({
      octArchive,
    }),
  ],
})
export class HomeModule {}
