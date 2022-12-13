import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../shared/services/restaurants.service';
import { IRestaurant } from '../../shared/types/restaurant.interface';

@Component({
  selector: 'app-list-all-page',
  templateUrl: './list-all-page.component.html',
  styleUrls: ['./list-all-page.component.scss'],
})
export class ListAllPageComponent implements OnInit {
  isLoading: boolean = false;

  restaurants: IRestaurant[] = [];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {}

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
