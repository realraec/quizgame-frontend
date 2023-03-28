import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
import { AbstractService } from './abstract.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private abstractService: AbstractService) { }

   /**
   * This method add question in database
   * @param question This is the question
   */
   public addQuestion(question: Question) {
    return this.http.post<Question>(
      'http://localhost:8080/api/questions/create',
      question,{ headers: this.abstractService.getOption() } 
    );
  }

  public updateQuestion(question: Question , id: number){
    return this.http.put<Question>('http://localhost:8080/api/questions/'+id, question, { headers: this.abstractService.getOption() } );
  }

  public getOneQuestion( id: number){
    return this.http.get<Question>('http://localhost:8080/api/questions/'+id, { headers: this.abstractService.getOption() } );
  }

  public getAnswerByIdQuestion(id: number){

    return this.http.get<Answer[]>('http://localhost:8080/api/answers/question/'+id, { headers: this.abstractService.getOption() } );
  }
 

  deleteQuestion(id: number){
    return this.http.delete('http://localhost:8080/api/questions/'+id, { headers: this.abstractService.getOption() } )
  }
}
