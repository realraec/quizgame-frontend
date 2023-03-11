import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from 'src/app/shared/models/intern.model';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-update-intern',
  templateUrl: './update-intern.component.html',
  styleUrls: ['./update-intern.component.scss']
})
export class UpdateInternComponent implements OnInit {
  
  intern: Intern = {};
  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;
  id!: number;

  constructor(
    private internService: InternService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneIntern(this.id);
  }
  
  getOneIntern(id: number) {
    this.internService.getOneIntern(id).subscribe({
      next: (data) => this.intern = data,
    }
    );
  }

  updateIntern() {
    this.isSubmit = true;

    this.internService.updateIntern(this.intern, this.id).subscribe({
      complete: () => {
        this.isSuccess = true;
        this.router.navigate(["administrator/intern/list"]);
      },
      error: (error) =>{
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
