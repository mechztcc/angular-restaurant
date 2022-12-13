import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ListAllPageComponent } from './pages/list-all-page/list-all-page.component';
import { NgIconsModule } from '@ng-icons/core';

import { octStarFill, octStar } from '@ng-icons/octicons';
import { CardRestaurantComponent } from './components/card-restaurant/card-restaurant.component';

@NgModule({
  declarations: [ListAllPageComponent, CardRestaurantComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NgIconsModule.withIcons({ octStarFill, octStar }),
  ],
})
export class RestaurantsModule {}
