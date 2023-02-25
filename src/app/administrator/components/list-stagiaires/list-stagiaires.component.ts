import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/shared/models/intern.model';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-list-stagiaires',
  templateUrl: './list-stagiaires.component.html',
  styleUrls: ['./list-stagiaires.component.scss'],
})
export class ListStagiairesComponent implements OnInit {
  interns: Intern[] = [];
  displayedColumns: string[] = ['lastname', 'firstname', 'email', 'company'];

  ngOnInit(): void {
    this.getAllInterns();
  }

  constructor(private internService: InternService) {}

  getAllInterns() {
    this.internService.getAllInterns().subscribe({
      next: (data) => (this.interns = data),
    });
  }
}
