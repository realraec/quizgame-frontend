import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  createQuestionForm!: FormGroup;
  addAnswerForm!: FormGroup;
  responses: Answer[] = [];
  submittedAnswer: boolean = false;
  id!: number;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {}

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

    let question : Question = {
      quizId: 0,
      answersIds: []
    };
    const formValue = this.createQuestionForm.value;
    question.wording = formValue['wording'];
    question.maxDurationInSeconds = formValue['maxDurationInSeconds'];
    question.id

  }

  addAnswer() {
    this.submittedAnswer = true;
   
      if(this.addAnswerForm.value['wording'] !== ''){
      let answer: Answer = {};
      const formValue = this.addAnswerForm.value;
      answer.wording = formValue['wording'];
      answer.correct = formValue['correct'];
      this.responses.push(answer);
      this.submittedAnswer = false;
      }
    
  }

  deleteAnswer(answer: Answer) {
    let index = this.responses.findIndex(
      (obj) => obj.wording === answer.wording
    );
    this.responses.splice(index, 1);
  }
}
