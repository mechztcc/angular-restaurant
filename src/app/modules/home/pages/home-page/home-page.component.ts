import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/modules/restaurants/shared/services/restaurants.service';
import { IRestaurant } from 'src/app/modules/restaurants/shared/types/restaurant.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  restaurants: IRestaurant[] = [];

  isLoading: boolean = false;

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.isLoading = true;
    this.restaurantsService
      .findAllByUser()
      .subscribe((data) => {
        this.restaurants = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
