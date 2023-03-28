import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(public http: HttpClient, public tokenStorage: TokenStorageService) {
  }


getOption() {
    const token = this.tokenStorage.getToken() ;
    if (token === null) {
        return new HttpHeaders({ 'Content-Type': 'application/json' })
    } else {
        return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })
    }
}

getUrl(url: string) {
    return 'http://localhost:8080/api/' + url;
  }

}
