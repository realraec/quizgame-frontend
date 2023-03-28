import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Count } from '../models/count.model';
import { Intern } from '../models/intern.model';
import { Quiz } from '../models/quiz.model';
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
    return this.http.post<Intern>(this.abstractService.getUrl(this.personUrl+'create'), intern, { headers: this.abstractService.getOption(), observe: 'response' });
  }

  public updateIntern(intern: Intern , id: number){
    return this.http.put<Intern>(this.abstractService.getUrl(this.personUrl+id), intern);
  }

  public getOneIntern( id: number){
    return this.http.get<Intern>(this.abstractService.getUrl(this.personUrl+id));
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
    return this.http.get<Quiz[]>('http://localhost:8080/api/quizzes/forPerson/'+id,  { headers: this.abstractService.getOption() } );

  }

  deleteIntern(id: number){
    return this.http.delete('http://localhost:8080/api/persons/'+id,  { headers: this.abstractService.getOption() } )
  }

  countInterns(){
    return this.http.get<Count>('http://localhost:8080/api/misc/counts',  { headers: this.abstractService.getOption() } );
  }

}
