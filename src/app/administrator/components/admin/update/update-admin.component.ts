import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from 'src/app/shared/models/intern.model';
import { InternService } from 'src/app/shared/services/intern.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {
  
  intern: Intern = {};
  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;
  id!: number;

  constructor(
    private internService: InternService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneAdmin(this.id);
  }
  
  getOneAdmin(id: number) {
    this.internService.getOneIntern(id).subscribe({
      next: (data) => this.intern = data,
    }
    );
  }

  updateAdmin() {
    this.isSubmit = true;

    this.internService.updateIntern(this.intern, this.id).subscribe({
      next: (data)=> this.tokenStorageService.saveUser(data),
      complete: () => {
        this.isSuccess = true;
      },
      error: (error) =>{
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
