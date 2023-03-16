import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-questionnaires-items',
  templateUrl: './questionnaires-items.component.html',
  styleUrls: ['./questionnaires-items.component.scss']
})
export class QuestionnairesItemsComponent implements OnInit{
  idQuiz: number | undefined
  quiz: Quiz | undefined
  quizzes: Quiz[] = [];
  quizSub: Subscription | undefined;
  step: number = 1;
  totalQuestion!: number;
  // @Input() quiz: Quiz | undefined
  constructor(private route: ActivatedRoute, private quizService: QuizService){}

  ngOnInit(){
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
}
