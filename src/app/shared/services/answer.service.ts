import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Progresses } from '../models/progressesSuper.model';
import { ProgressQuestion } from '../models/progressQuestion';
import { Recording } from '../models/recording.model';
import { Answer } from '../models/answer.model';
import { Resultat } from '../models/resultat.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private abstractService: AbstractService) { }

  getQuestionInProgress(id: number){
    return this.http.get<ProgressQuestion>('http://localhost:8080/api/questions/notInProgress/'+id);

  }

  saveRecord(questionId: number, progressId: number, pickedAnswersIds: number[]): Observable<any> {
    const url = 'http://localhost:8080/api/records/createAndCheck';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const data = {
      questionId: questionId,
      progressId: progressId,
      pickedAnswersIds:[]
    };
    return this.http.post(url, data, httpOptions);
  }


  getProgresses(id: number){
    return this.http.get<Progresses>('http://localhost:8080/api/progresses/'+id)
  }
  // resultat des candidats
  getResultat(id: number){
    return this.http.get<Resultat>('http://localhost:8080/api/progresses/'+id)
  }

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
