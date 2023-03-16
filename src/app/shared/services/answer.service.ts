import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

   /**
   * This method add answer in database
   * @param answer This is the answer
   */
   public addAnswer(question: Answer) {
    return this.http.post<Answer>(
      'http://localhost:8080/api/answers/create',
      question
    );
  }

  public updateAnswer(answer: Answer , id: number){
    return this.http.put<Answer>('http://localhost:8080/api/answers/'+id, answer);
  }

  public getOneAnswer( id: number){
    return this.http.get<Answer>('http://localhost:8080/api/answers/'+id);
  }

 

  deleteAnswer(id: number){
    return this.http.delete('http://localhost:8080/api/answers/'+id)
  }
}
