import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }


}
