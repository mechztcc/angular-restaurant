import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  octCheck,
  octEye,
  octEyeClosed,
  octKebabHorizontal,
  octMention,
  octPerson
} from '@ng-icons/octicons';

import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from '../app-routing.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      octPerson,
      octMention,
      octEye,
      octEyeClosed,
      octCheck,
      octKebabHorizontal,
    }),
  ],
  exports: [PrimaryButtonComponent],
})
export class CoreModule {}
