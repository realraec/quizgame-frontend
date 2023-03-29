import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient, private abstractService: AbstractService) { }

  public updatePassword(id: number, oldPassword: string, newPassword: string) {
    return this.http.put(
      'http://localhost:8080/api/auth/password',
      {id,oldPassword, newPassword},
      { headers: this.abstractService.getOption() }
    );
  }
}
