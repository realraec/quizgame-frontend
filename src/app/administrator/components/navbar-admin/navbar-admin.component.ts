import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent {
  constructor(private router: Router) {}

  goAddInternPage() {
    this.router.navigate(['administrator/intern/list']);
  }
}
