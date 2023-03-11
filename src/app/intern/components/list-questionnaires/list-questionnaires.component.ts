import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit{
  quizzes: Quiz[] = [];
  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.getAllQuizzes()
  }

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => (this.quizzes = data),
    });
    console.log("**************salut**********");

    console.log(this.quizzes);

  }
}
