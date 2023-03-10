import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intern } from '../models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  /**
   * This method add intern in database
   * @param intern This is the intern
   * @returns
   */
  public addIntern(intern: Intern) {
    return this.http.post<Intern>('http://localhost:8080/api/interns/create', intern);
  }

  public updateIntern(intern: Intern , id: number){
    return this.http.put<Intern>('http://localhost:8080/api/interns/'+id, intern);
  }

  public getOneIntern( id: number){
    return this.http.get<Intern>('http://localhost:8080/api/interns/'+id);
  }

  /**
   * This method return all interns
   * @returns List of all interns
   */

  getAllInterns(){
    return this.http.get<Intern[]>('http://localhost:8080/api/quizzes');

  }

  deleteIntern(id: number){
    return this.http.delete('http://localhost:8080/api/interns/'+id)
  }

}
