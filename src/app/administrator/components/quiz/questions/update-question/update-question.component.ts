import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss'],
})
export class UpdateQuestionComponent {
  question!: Question;
  addAnswerForm!: FormGroup;
  answers: Answer[] = [];
  newAnswers: Answer[] = [];
  submitedAnswer: boolean = false;
  submitedQuestion: boolean = false;
  isSuccess: boolean = false;
  isAnswersNotEnougth = false;
  idQuiz!: number;
  idQuestion!: number;
  correctResponseExistsError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.idQuiz = this.route.snapshot.params['idQuiz'];
    this.idQuestion = this.route.snapshot.params['idQuestion'];
    this.getOneQuestion(this.idQuestion);
    this.getAllAnswersByIdQuestion(this.idQuestion);
    this.initAddAnswerForm();
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

  getOneQuestion(id: number) {
    this.questionService.getOneQuestion(id).subscribe({
      next: (data) => (this.question = data),
    });
  }

  getAllAnswersByIdQuestion(id: number) {
    this.questionService.getAnswerByIdQuestion(id).subscribe({
      next: (data) => (this.answers = data),
    });
  }

  updateQuestion() {
    this.submitedQuestion = true;

    if (this.answers.concat(this.newAnswers).length < 2) {
      this.isAnswersNotEnougth = true;
    } else {
      if (this.verifyIfCorrectAnswerExists()) {
        let questionAfterSubmit: Question = {
          quizId: 0,
          answersIds: [],
        };

        this.question.quizId = this.idQuiz;

        this.questionService
          .updateQuestion(this.question, this.question.id!)
          .subscribe({
            next: (data) => (questionAfterSubmit = data),
            complete: () => {
              this.answers.forEach((value) => {
                this.answerService.updateAnswer(value, value.id!).subscribe({
                  complete: () => (this.isSuccess = true),
                });
              });

              this.newAnswers.forEach((value) => {
                value.questionId = questionAfterSubmit.id;
                this.answerService.addAnswer(value).subscribe({
                  complete: () => {
                    this.isSuccess = true;
                  },
                });
              });
            },
          });
      } else {
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
      if (
        !answer.correct ||
        (answer.correct && !this.verifyIfCorrectAnswerExists())
      ) {
        this.newAnswers.push(answer);
        this.submitedAnswer = false;
        this.addAnswerForm.reset();
      } else {
        this.correctResponseExistsError = true;
      }
    }
  }

  verifyIfCorrectAnswerExists(): boolean {
    let isExist = false;
    this.answers.forEach((value) => {
      if (value.correct) {
        isExist = true;
      }
    });

    this.newAnswers.forEach((value) => {
      if (value.correct) {
        isExist = true;
      }
    });
    return isExist;
  }

  deleteAnswer(answer: Answer) {
    console.log(answer);
    console.log("answers"+this.answers.length);
    console.log(this.answers.concat(this.newAnswers).length)
    /*if (answer.id) {
      let index = this.answers
        .findIndex((obj) => obj.wording === answer.wording);
      this.answers.splice(index, 1);
      this.answerService.deleteAnswer(answer.id).subscribe({});
    } else {
      let index = this.newAnswers
        .findIndex((obj) => obj.wording === answer.wording);
      this.newAnswers.splice(index, 1);
    }*/
  }
}
