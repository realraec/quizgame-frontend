import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intern } from 'src/app/shared/models/intern.model';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-list-intern',
  templateUrl: './list-intern.component.html',
  styleUrls: ['./list-intern.component.scss'],
})
export class ListInternComponent implements OnInit {
  interns: Intern[] = [];

  ngOnInit(): void {
    this.getAllInterns();
  }

  
  constructor(private internService: InternService, private router: Router) {}

  getAllInterns() {
    this.internService.getAllInterns().subscribe({
      next: (data) => (this.interns = data),
    });
  }
  deleteIntern(id: number){
    this.internService.deleteIntern(id).subscribe(
      {
        complete: ()=> window.location.reload()
      }
    );
  }

}
