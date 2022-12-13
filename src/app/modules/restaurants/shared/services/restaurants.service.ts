import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRestaurant } from '../types/restaurant.interface';

const api = 'restaurants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  findAllByUser(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${api}`)
  }
}
