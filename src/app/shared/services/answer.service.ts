import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Progresses } from '../models/progressesSuper.model';
import { ProgressQuestion } from '../models/progressQuestion';
import { Recording } from '../models/recording.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  constructor(private http: HttpClient) { }

  getQuestionInProgress(id: number){
    return this.http.get<ProgressQuestion>('http://localhost:8080/api/questions/notInProgress/'+id);

  }
  saveRecord(records: Recording){
    return this.http.post<Recording>('http://localhost:8080/api/records/create',records);
  }

  getProgresses(id: number){
    return this.http.get<Progresses>('http://localhost:8080/api/progresses/'+id)
  }
}
