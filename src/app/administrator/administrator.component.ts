import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Count } from '../shared/models/count.model';
import { Intern } from '../shared/models/intern.model';
import { InternService } from '../shared/services/intern.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss'],
})
export class AdministratorComponent implements OnInit {
  count!: Count;
  admin!: Intern;
  id!: number;

  ngOnInit(): void {
    this.getQuizandInternCount();
    this.getAdmin();
  }

  constructor(
    private internService: InternService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  getAdmin() {
    this.admin = this.tokenStorageService.getUser();
    this.id  = this.admin.id!;
  }

  getQuizandInternCount() {
    this.internService.countInterns().subscribe({
      next: (data) => (this.count = data),
    });
  }

  deleteAccount(){
    this.internService.deleteIntern(this.admin.id!).subscribe(
      {
        complete: ()=> this.router.navigate([""])
      }
    );
  }
}
