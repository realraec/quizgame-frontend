import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post<Intern>('http://localhost:8080/api/interns/create', intern);
  }

 /**   * This method return all interns   
  * * @returns List of all interns   */
 getAllInterns(){
  return this.http.get<Intern[]>('http://localhost:8080/api/interns');
}

  getAllQuizzesforIntern(id: number){
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes/forIntern/'+id);

  }
}
