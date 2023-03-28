import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent {
  constructor( private tokenStorageService: TokenStorageService, private router: Router) {}

  goAddInternPage() {
    this.router.navigate(['administrator/intern/list']);
  }

  signOut(){

    this.tokenStorageService.signOut();
    this.router.navigate(["/"])
  }
}
