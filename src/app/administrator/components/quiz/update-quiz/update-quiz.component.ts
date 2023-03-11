import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent {
  quiz: Quiz = {
    questionsIds: []
  };
  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;
  id!: number;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneIntern(this.id);
  }
  
  getOneIntern(id: number) {
    this.quizService.getOneQuiz(id).subscribe({
      next: (data) => this.quiz = data,
    }
    );
  }

  updateQuiz() {
    this.isSubmit = true;

    this.quizService.updateQuiz(this.quiz, this.id).subscribe({
      complete: () => {
        this.isSuccess = true;
        this.router.navigate(["administrator/quiz/list"]);
      },
      error: (error) =>{
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
