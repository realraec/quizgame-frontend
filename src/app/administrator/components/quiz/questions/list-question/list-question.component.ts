import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuestionService } from 'src/app/shared/services/question.service';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent {
  questions: Question[] = [];
  id!: number;
  quiz: Quiz = {
    questionsIds: []
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllQuestionsByIdQuiz(this.id);
  }

  constructor(private quizService: QuizService, private questionService: QuestionService, private route: ActivatedRoute) {}

  getAllQuestionsByIdQuiz(id: number){
    this.quizService.getOneQuiz(id).subscribe(
      {
        next: (data) => this.quiz = data,
        complete: () => this.initQuestions()
        
      }
    )
  }

  initQuestions() {
    this.quiz.questionsIds.forEach((value)=> this.questionService.getOneQuestion(
      value
    ).subscribe({next: (data)=>this.questions.push(data)}) );

  }

  deleteQuestion(id: number){
    this.questionService.deleteQuestion(id).subscribe(
      {
        complete: ()=> window.location.reload()
      }
    );
  }
}
