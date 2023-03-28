import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../models/intern.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public login(username: string, password: string): Observable<any> {

    return this.http.post('http://localhost:8080/api/auth/authenticate', {
      username,
      password,
    });
  }
}
