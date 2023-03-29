import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { Answer } from 'src/app/shared/models/answer.model';
import { ProgressQuestion } from 'src/app/shared/models/progressQuestion';
// import { ProgressQuestion } from 'src/app/shared/models/progressQuestion';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { Recording } from 'src/app/shared/models/recording.model';
// import { Recording } from 'src/app/shared/models/recording.model';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-question-progress',
  templateUrl: './question-progress.component.html',
  styleUrls: ['./question-progress.component.scss'],
})
export class QuestionProgressComponent implements OnInit {
  idProgress!: number;
  questionId?: number;
  answers: Answer[] = []
  reste = 'toolsets';
  quizzes: Quiz[] = [];
  typeRecords: Recording = {};
  data: number = 0;
  lisQuestions!: ProgressQuestion;
  duree?: number;
  pickedAnswersIds : number[] = [];
  checkForm?: FormGroup;
  // checked:boolean = false
  check: FormControl;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private questionService: AnswerService,
    private internService: InternService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.check = fb.control(false);
    this.checkForm = fb.group({
    check: this.check
    });
    this.idProgress = this.route.snapshot.params['id'];
    console.log(this.idProgress);

  }

  ngOnInit() {
    const obs$ = interval(1000);
    obs$.subscribe(d => {
      this.data = (this.duree!-d);

    });
    if (this.data === 0) {
      this.onSaveForm()

    }

    this.questionService.getQuestionInProgress(this.idProgress).subscribe({
      next: (data: ProgressQuestion) => {
        this.lisQuestions = data;
        console.log(data);
        this.duree = this.lisQuestions.maxDurationInSeconds;
        this.questionId = this.lisQuestions.id;
        console.log(this.questionId);
      },
    });
  }
  onCheckboxChange(answer: any){
    if(!this.pickedAnswersIds.includes(answer.id)){
      this.pickedAnswersIds.push(answer.id)
    }

  }

  onSaveForm() {
    const questionId = this.questionId!;
    const progressId = this.idProgress!;

    console.log("erreur" +this.idProgress);


    this.questionService.saveRecord(questionId, progressId, this.pickedAnswersIds).subscribe({
      next: (data) => {
        console.log(this.pickedAnswersIds);
          // window.location.reload()
      },

    });
  }





}
