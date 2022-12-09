import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { octPerson } from '@ng-icons/octicons';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';

@NgModule({
  declarations: [CreateAccountPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    NgIconsModule.withIcons({ octPerson }),
  ],
})
export class AuthModule {}
