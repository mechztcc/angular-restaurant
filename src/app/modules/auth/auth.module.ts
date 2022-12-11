import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import {
  octPerson,
  octMention,
  octEye,
  octEyeClosed,
  octCheck,
  octKebabHorizontal,
} from '@ng-icons/octicons';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { CardCreateAccountComponent } from './components/card-create-account/card-create-account.component';
import { LoginAccountPageComponent } from './pages/login-account-page/login-account-page.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CreateAccountPageComponent,
    CardCreateAccountComponent,
    LoginAccountPageComponent,
    CardLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    NgIconsModule.withIcons({
      octPerson,
      octMention,
      octEye,
      octEyeClosed,
      octCheck,
      octKebabHorizontal
    }),
  ],
})
export class AuthModule {}
