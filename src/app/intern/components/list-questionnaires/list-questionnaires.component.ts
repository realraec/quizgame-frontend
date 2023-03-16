import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private internService: InternService) {}

  ngOnInit(): void {
    this.onGetAllQuizzesforIntern(1)
  }

  onGetAllQuizzesforIntern(id: number){
    // this.idIntern = +this.route.snapshot.params['id']
    console.log(this.idIntern);
    this.internService.getAllQuizzesforIntern(1).subscribe({
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

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => (this.quizzes = data),
    });
    console.log("**************salut**********");

    console.log(this.quizzes);

  }
}
