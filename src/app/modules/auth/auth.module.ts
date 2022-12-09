import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';

@NgModule({
  declarations: [CreateAccountPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
