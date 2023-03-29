import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Count } from 'src/app/shared/models/count.model';
import { Intern } from 'src/app/shared/models/intern.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizForIntern } from 'src/app/shared/models/quizforintern.model';
import { InternService } from 'src/app/shared/services/intern.service';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';


@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit{
  count!: Count;
  intern!: Intern;
  id!: number;
  idIntern!: number
  quizzes: QuizForIntern[] = [];
  interns: Intern[] = [];


  constructor(private route: ActivatedRoute, private service: TokenStorageService, private quizService: QuizService, private router: Router, private internService: InternService) {
     this.idIntern = +this.route.snapshot.params['id']

  }

  ngOnInit(): void {
    this.getIntern()
    this.idIntern = +this.route.snapshot.params['id']
    console.log(this.idIntern);
    // this.onGetAllInternsById(this.idIntern)
    this.onGetAllQuizzesforIntern()
  }

  onGetAllQuizzesforIntern(){
    // this.idIntern = +this.route.snapshot.params['id']
    // console.log(this.idIntern);
    console.log(this.id);
    this.internService.getAllQuizzesforIntern(this.id).subscribe({
      next: (data) =>{
    // this.quizzes = data.filter(q => q.id === this.idIntern)
        this.quizzes = data
        console.log(this.quizzes)
      }
    });

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
  getIntern() {
    this.intern = this.service.getUser();
    this.id  = this.intern.id!;
    console.log(this.id);

  }
}
