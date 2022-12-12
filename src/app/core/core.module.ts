import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  octCheck,
  octEye,
  octEyeClosed,
  octKebabHorizontal,
  octMention,
  octPerson,
  octFeedTag,
  octThreeBars,
  octBellFill
} from '@ng-icons/octicons';

import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from '../app-routing.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [PrimaryButtonComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      octPerson,
      octMention,
      octEye,
      octEyeClosed,
      octCheck,
      octKebabHorizontal,
      octFeedTag,
      octThreeBars,
      octBellFill
    }),
  ],
  exports: [PrimaryButtonComponent, NavbarComponent],
})
export class CoreModule {}
