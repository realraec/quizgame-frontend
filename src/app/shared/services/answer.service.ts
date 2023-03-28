import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private abstractService: AbstractService) { }

   /**
   * This method add answer in database
   * @param answer This is the answer
   */
   public addAnswer(question: Answer) {
    return this.http.post<Answer>(
      'http://localhost:8080/api/answers/create',
      question,
      { headers: this.abstractService.getOption() }
    );
  }

  public updateAnswer(answer: Answer , id: number){
    return this.http.put<Answer>('http://localhost:8080/api/answers/'+id, answer, { headers: this.abstractService.getOption() });
  }

  public getOneAnswer( id: number){
    return this.http.get<Answer>('http://localhost:8080/api/answers/'+id,  { headers: this.abstractService.getOption() });
  }

 

  deleteAnswer(id: number){
    return this.http.delete('http://localhost:8080/api/answers/'+id,  { headers: this.abstractService.getOption() })
  }
}
