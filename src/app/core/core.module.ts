import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  octBellFill,
  octCheck,
  octChecklist,
  octEye,
  octEyeClosed,
  octFeedTag,
  octHeart,
  octIdBadge,
  octKebabHorizontal,
  octMention,
  octPackage,
  octPerson,
  octPersonFill,
  octSignOut,
  octThreeBars,
  octTools,
  octHome,
} from '@ng-icons/octicons';

import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [PrimaryButtonComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
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
      octHome,
      octPersonFill,
      octChecklist,
      octIdBadge,
      octHeart,
    }),
  ],
  exports: [PrimaryButtonComponent, NavbarComponent, SidebarComponent],
})
export class CoreModule {}
