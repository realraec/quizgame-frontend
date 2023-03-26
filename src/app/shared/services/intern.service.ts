import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Count } from '../models/count.model';
import { Intern } from '../models/intern.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  /**
   * This method add intern in database
   * @param intern This is the intern
   * @param quiz

   * @returns
   */
  public addIntern(intern: Intern) {
    return this.http.post<Intern>('http://localhost:8080/api/persons/create', intern);
  }


  public updateIntern(intern: Intern , id: number){
    return this.http.put<Intern>('http://localhost:8080/api/persons/'+id, intern);
  }

  public getOneIntern( id: number){
    return this.http.get<Intern>('http://localhost:8080/api/persons/'+id);
  }

  /**
   * This method return all interns
   * @returns List of all interns
   */
  getAllInterns(){
    return this.http.get<Intern[]>('http://localhost:8080/api/persons/interns');
  }

  getAllQuizzesforIntern(id: number){
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes/forPerson/'+id);

  }

  deleteIntern(id: number){
    return this.http.delete('http://localhost:8080/api/persons/'+id)
  }

  countInterns(){
    return this.http.get<Count>('http://localhost:8080/api/misc/counts');
  }

}
