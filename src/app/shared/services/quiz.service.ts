import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Quiz } from '../models/quiz.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient, private questionService: QuestionService) {}

  /**
   * This method add quiz in database
   * @param intern This is the quiz
   * @returns
   */
  public addQuiz(quiz: Quiz) {
    return this.http.post<Quiz>(
      'http://localhost:8080/api/quizzes/create',
      quiz
    );
  }

  public updateQuiz(intern: Quiz , id: number){
    return this.http.put<Quiz>('http://localhost:8080/api/quizzes/'+id, intern);
  }

  public getOneQuiz( id: number){
    return this.http.get<Quiz>('http://localhost:8080/api/quizzes/'+id);
  }


  /**
   * This method return all quizzes
   * @returns List of quizzes
   */
  getAllQuizzes() {
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes');
  }

  getAllQuestionsByIdQuiz(id: number){
    let quiz: Quiz = {
      questionsIds: []
    }
    let questions: Question[] = [];
    this.getOneQuiz(id).subscribe({
      next: (data) => quiz = data,
     
    });

    quiz.questionsIds.forEach((value)=> this.questionService.getOneQuestion(
      value
    ).subscribe({next: (data)=>questions.push(data)}) );
  
      
    return questions;
  }

  deleteQuiz(id: number){
    return this.http.delete('http://localhost:8080/api/quizzes/'+id)
  }

}
