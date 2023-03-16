import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Quiz } from '../models/quiz.model';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

   /**
   * This method add question in database
   * @param question This is the question
   */
   public addQuestion(question: Question) {
    return this.http.post<Question>(
      'http://localhost:8080/api/questions/create',
      question
    );
  }

  public updateQuestion(question: Question , id: number){
    return this.http.put<Question>('http://localhost:8080/api/questions/'+id, question);
  }

  public getOneQuestion( id: number){
    return this.http.get<Question>('http://localhost:8080/api/questions/'+id);
  }

 

  deleteQuestion(id: number){
    return this.http.delete('http://localhost:8080/api/questions/'+id)
  }
}
