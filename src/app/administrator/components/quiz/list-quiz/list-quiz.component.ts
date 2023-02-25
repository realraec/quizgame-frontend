import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {

  quizzes: Quiz[] = [];

  ngOnInit(): void {
    this.getAllQuizzes();
  }

  constructor(private quizService: QuizService) {}

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => (this.quizzes = data),
    });
  }
}
