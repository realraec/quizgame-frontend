import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public loginUserFromRemote(user: Intern):Observable<Intern>{
    return this.http.post<Intern>("http://localhost:8080/api/login",user);
  }
}
