import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  octBellFill,
  octCheck,
  octEye,
  octEyeClosed,
  octFeedTag,
  octKebabHorizontal,
  octMention,
  octPackage,
  octPerson,
  octPersonFill,
  octSignOut,
  octThreeBars,
  octTools,
  octChecklist,
  octIdBadge,
  octHeart
} from '@ng-icons/octicons';

import { NgIconsModule } from '@ng-icons/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [PrimaryButtonComponent, NavbarComponent, SidebarComponent],
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
      octBellFill,
      octPackage,
      octSignOut,
      octTools,
      octPersonFill,
      octChecklist,
      octIdBadge,
      octHeart
    }),
  ],
  exports: [PrimaryButtonComponent, NavbarComponent, SidebarComponent],
})
export class CoreModule {}
