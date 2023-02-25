import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

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

  /**
   * This method return all quizzes
   * @returns List of quizzes
   */
  getAllQuizzes() {
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes');
  }
}
