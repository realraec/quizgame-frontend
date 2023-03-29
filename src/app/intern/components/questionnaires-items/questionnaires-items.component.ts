import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Progresses } from 'src/app/shared/models/progressesSuper.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-questionnaires-items',
  templateUrl: './questionnaires-items.component.html',
  styleUrls: ['./questionnaires-items.component.scss']
})
export class QuestionnairesItemsComponent implements OnInit{
  idQuiz!: number;
  quiz: Quiz | undefined;
  progress!: Progresses
  personId!: number
  score!: number;
  recordsIds: number[] = []
  quizzes: Quiz[] = [];
  quizSub: Subscription | undefined;
  step: number = 1;
  totalQuestion!: number;
  // @Input() quiz: Quiz | undefined
  constructor(private answer: AnswerService, private route: ActivatedRoute, private router: Router, private quizService: QuizService, private token: TokenStorageService){
  }

  ngOnInit(){
    this.personId = this.token.getUser().id;
    this.idQuiz = +this.route.snapshot.params['id']
    console.log(this.idQuiz);
    this.quizSub = this.quizService.getAllQuizzes().subscribe({
      next: (data: Quiz[]) => {
      this.quiz = data.filter(p => p.id === this.idQuiz)[0];
      console.log(data);
      console.log(this.quiz);
      },
      error: (error: any) => {
        console.log('Error :', error);
      },


    });

  }
   submit(){
    if(this.step < this.totalQuestion ){
      this.step = this.step + 1;
      console.log(this.step);

    }

  }
  previous(){
    if(this.step > 2 && this.step <= this.totalQuestion){

      this.step = this.step + 1;
      console.log(this.step);

    }
  }
  onProgressQuestion(){
    this.router.navigateByUrl("/questions/progress")
  }
  onProgress(){
    this.answer.createProgress(this.personId, this.idQuiz, 0).subscribe({
      next: (data) =>{
        this.progress = data;

      },
      complete : () =>{
        this.router.navigate(["/intern/questions/progress/"+this.progress.id])
      }

    }
    )
  }
}
