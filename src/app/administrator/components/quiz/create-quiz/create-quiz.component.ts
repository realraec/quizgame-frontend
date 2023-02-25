import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {

  createQuizForm!: FormGroup;
  quiz: Quiz = {
    questionsIds: []
  };
  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createQuizForm = this.formBuilder.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
     
    });
  }

  createQuiz() {
    this.isSubmit = true;
    const formValue = this.createQuizForm.value;
    this.quiz.title = formValue['title'];
    this.quiz.summary = formValue['summary'];

    this.quizService.addQuiz(this.quiz).subscribe({
      complete: () => (this.isSuccess = true),
      error: (error) =>{
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
