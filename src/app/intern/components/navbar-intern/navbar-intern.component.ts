import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-navbar-intern',
  templateUrl: './navbar-intern.component.html',
  styleUrls: ['./navbar-intern.component.scss']
})
export class NavbarInternComponent {

  constructor( private tokenStorageService: TokenStorageService, private router: Router) {}


  signOut(){
    this.tokenStorageService.signOut();
    this.router.navigate(["/"]);
  }
}
