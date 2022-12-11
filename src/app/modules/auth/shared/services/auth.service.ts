import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../types/login.interface';

const api = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(`${api}`, payload);
  }
}
