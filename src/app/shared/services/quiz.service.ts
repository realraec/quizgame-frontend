import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intern } from '../models/intern.model';
import { Question } from '../models/question.model';
import { Quiz } from '../models/quiz.model';
import { AbstractService } from './abstract.service';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient, private questionService: QuestionService, private abstractService: AbstractService) {}

  /**
   * This method add quiz in database
   * @param intern This is the quiz
   * @returns
   */
  public addQuiz(quiz: Quiz) {
    return this.http.post<Quiz>(
      'http://localhost:8080/api/quizzes/create',
      quiz,
      { headers: this.abstractService.getOption() } 
    );
  }

  public updateQuiz(intern: Quiz , id: number){
    return this.http.put<Quiz>('http://localhost:8080/api/quizzes/'+id, intern, { headers: this.abstractService.getOption() } );
  }

  public getOneQuiz( id: number){
    return this.http.get<Quiz>('http://localhost:8080/api/quizzes/'+id,  { headers: this.abstractService.getOption() } );
  }


  /**
   * This method return all quizzes
   * @returns List of quizzes
   */
  getAllQuizzes() {
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes',  { headers: this.abstractService.getOption() } );
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
    return this.http.delete('http://localhost:8080/api/quizzes/'+id,  { headers: this.abstractService.getOption() } )
  }
  
  addInternToQuiz(idQuiz: number, internId: number){
     return this.http.patch('http://localhost:8080/api/quizzes/'+idQuiz+ '/attributePersons/'+internId, {},  { headers: this.abstractService.getOption() } );
  }

  removeInternToQuiz(idQuiz: number, internId: number){
    return this.http.patch('http://localhost:8080/api/quizzes/'+idQuiz+ '/removePersons/'+internId, {} ,  { headers: this.abstractService.getOption() } );
 }

  getAllInterAttributedToQuiz(idQuiz: number){

    return this.http.get<Intern[]>('http://localhost:8080/api/persons/attributedToQuiz/'+idQuiz,  { headers: this.abstractService.getOption() } );
  }
  getAllInterNotAttributedToQuiz(idQuiz: number){

    return this.http.get<Intern[]>('http://localhost:8080/api/persons/notAttributedToQuiz/'+idQuiz,  { headers: this.abstractService.getOption() } );

  }

}
