import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreatedSession } from '../types/created-session.interface';
import { ILogin } from '../types/login.interface';

const api = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: ILogin): Observable<ICreatedSession> {
    return this.http.post<ICreatedSession>(`${api}/login`, payload);
  }
}
