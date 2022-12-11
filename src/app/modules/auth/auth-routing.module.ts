import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginAccountPageComponent } from './pages/login-account-page/login-account-page.component';

const routes: Routes = [
  { path: 'signin', component: CreateAccountPageComponent },
  { path: 'login', component: LoginAccountPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
