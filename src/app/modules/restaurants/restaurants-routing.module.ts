import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllPageComponent } from './pages/list-all-page/list-all-page.component';

const routes: Routes = [{ path: '', component: ListAllPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
