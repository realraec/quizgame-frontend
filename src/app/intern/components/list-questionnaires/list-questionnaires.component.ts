import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from 'src/app/shared/models/intern.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit{
  idIntern!: number
  quizzes: Quiz[] = [];
  interns: Intern[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private internService: InternService) {
     this.idIntern = +this.route.snapshot.params['id']
    console.log(this.idIntern);
  }

  ngOnInit(): void {
    // this.onGetAllInternsById(this.idIntern)
    this.onGetAllQuizzesforIntern(4)
  }

  onGetAllQuizzesforIntern(id: number){
    // this.idIntern = +this.route.snapshot.params['id']
    // console.log(this.idIntern);
    this.internService.getAllQuizzesforIntern(4).subscribe({
      next: (data: Quiz[]) =>{
    // this.quizzes = data.filter(q => q.id === this.idIntern)
        this.quizzes = data
      }
    });
    console.log(this.quizzes)
  }
  onQuestion(){
    // this.router.navigateByUrl("questions")
    // console.log("click");
  }

}
