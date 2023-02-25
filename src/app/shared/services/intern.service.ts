import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intern } from '../models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }



  getAllInterns(){
    return this.http.get<Intern[]>('http://localhost:8080/api/interns');

  }
}
