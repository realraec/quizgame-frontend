import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  
  createQuestionForm!: FormGroup;
  addAnswerForm!: FormGroup;
  answers: Answer[] = [];
  submitedAnswer: boolean = false;
  submitedQuestion: boolean = false;
  isSuccess: boolean = false;
  isAnswersNotEnougth = false;
  id!: number;
  correctResponseExistsError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initCreateQuestionForm();
    this.initAddAnswerForm();
  }

  initCreateQuestionForm() {
    this.createQuestionForm = this.formBuilder.group({
      wording: ['', Validators.required],
      maxDurationInSeconds: ['', Validators.required],
    });
  }

  initAddAnswerForm() {
    this.addAnswerForm = this.formBuilder.group({
      wording: ['', Validators.required],
      correct: [false],
    });
  }

  get fa() {
    return this.addAnswerForm.controls;
  }

  createQuestion() {
    this.submitedQuestion = true;

    if(this.answers.length < 2 ){
      this.isAnswersNotEnougth  = true;
    }
    else{

      if(this.verifyIfCorrectAnswerExists()){
    let questionAfterSubmit: Question = {
      quizId: 0,
      answersIds: [],
    };

    let question: Question = {
      quizId: 0,
      answersIds: [],
    };
    const formValue = this.createQuestionForm.value;
    question.wording = formValue['wording'];
    question.maxDurationInSeconds = formValue['maxDurationInSeconds'];
    question.quizId = this.id;

    this.questionService.addQuestion(question).subscribe({
      next: (data) => (questionAfterSubmit = data),
      complete: () =>
        this.answers.forEach((value) => {
          value.questionId = questionAfterSubmit.id;
          this.answerService.addAnswer(value).subscribe({
            complete: () => {
              this.isSuccess = true;
            },
          });
        }),
    });
  }
  else{

  }
}
  }

  addAnswer() {
    this.submitedAnswer = true;

    if (this.addAnswerForm.value['wording'] !== '') {
      let answer: Answer = {};
      const formValue = this.addAnswerForm.value;
      answer.wording = formValue['wording'];
      answer.correct = formValue['correct'];
      if( !answer.correct || (answer.correct &&  !this.verifyIfCorrectAnswerExists())){
      this.answers.push(answer);
      this.submitedAnswer = false;
      this.addAnswerForm.reset();

      
      }
      else{
        this.correctResponseExistsError  = true;
      }
    }
  }

  verifyIfCorrectAnswerExists(): boolean{
    let isExist = false;
    this.answers.forEach((value) => {
      if(value.correct){
        isExist = true;
      }
    }
      
    )
    return isExist;
  }

  deleteAnswer(answer: Answer) {
    let index = this.answers.findIndex(
      (obj) => obj.wording === answer.wording
    );
    this.answers.splice(index, 1);
  }
}
