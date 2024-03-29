import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Count } from '../models/count.model';
import { Intern } from '../models/intern.model';
import { Quiz } from '../models/quiz.model';
import { QuizForIntern } from '../models/quizforintern.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient, private abstractService: AbstractService) { }

  personUrl: string = 'persons/';
  /**
   * This method add intern in database
   * @param intern This is the intern
   * @param quiz

   * @returns
   */
  public addIntern(intern: Intern) {
    return this.http.post<Intern>(this.abstractService.getUrl('auth/register'), intern, { headers: this.abstractService.getOption(), observe: 'response' });
  }

  public updateIntern(intern: Intern , id: number){
    return this.http.put<Intern>(this.abstractService.getUrl(this.personUrl+id), intern,  { headers: this.abstractService.getOption() });
  }

  public getOneIntern( id: number){
    return this.http.get<Intern>(this.abstractService.getUrl(this.personUrl+id),  { headers: this.abstractService.getOption() });
  }

  public getOneInternByUsername( username: string){
    return this.http.get<Intern>(this.abstractService.getUrl(this.personUrl+'username/'+username),  { headers: this.abstractService.getOption() });
  }


  /**
   * This method return all interns
   * @returns List of all interns
   */
  getAllInterns(){
    return this.http.get<Intern[]>(this.abstractService.getUrl(this.personUrl+'interns'), { headers: this.abstractService.getOption() } );
  }


getAllInternsById(id: number){
  return this.http.get<Intern[]>('http://localhost:8080/api/persons/interns/'+id);
}

  getAllQuizzesforIntern(id: number){
    return this.http.get<QuizForIntern[]>('http://localhost:8080/api/quizzes/forIntern/'+id, { headers: this.abstractService.getOption() } );

  }

  deleteIntern(id: number){
    return this.http.delete('http://localhost:8080/api/persons/'+id,  { headers: this.abstractService.getOption() } )
  }

  countInterns(){
    return this.http.get<Count>('http://localhost:8080/api/misc/counts',  { headers: this.abstractService.getOption() } );
  }

}
