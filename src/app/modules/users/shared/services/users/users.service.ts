import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../../types/users.interface';

const api = 'users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createAccount(payload: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(`${api}/create`, payload);
  }
}
