import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { ProgressQuestion } from 'src/app/shared/models/progressQuestion';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { Recording } from 'src/app/shared/models/recording.model';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-question-progress',
  templateUrl: './question-progress.component.html',
  styleUrls: ['./question-progress.component.scss']
})
export class QuestionProgressComponent implements OnInit{
 reste = "toolsets";
 quizzes: Quiz[] = [];
 records!: Recording;
 data: number = 0;
  lisQuestions!: ProgressQuestion;
  idProgress?: number;
  questionId?: number;
  duree?: number;
  checkForm?: FormGroup;
  check: FormControl
  constructor(private fb: FormBuilder, private questionService: AnswerService, private internService: InternService, private router: Router, private route:ActivatedRoute){
    this.check = fb.control("true", [Validators.required])
    this.checkForm = fb.group({
      check:this.check
    })
    this.idProgress = +this.route.snapshot.params['id']
    console.log(this.idProgress);
    // this.questionId = this.lisQuestions?.id;
    console.log(this.questionId);

  }


  ngOnInit(){

    const obs$ = interval(1000)
    obs$.subscribe((d) => {
      this.data = ((this.duree!)-d)
      if(this.data === 0){
      // this.onSaveForm()
      // this.data = 0
    }

    })

    console.log(this.idProgress);
    this.questionService.getQuestionInProgress(this.idProgress!).subscribe({
      next: (data: ProgressQuestion) =>{
        this.lisQuestions = data;
        console.log(this.lisQuestions);
        this.duree = this.lisQuestions.maxDurationInSeconds
        this.questionId = this.lisQuestions.id;
        console.log(this.questionId);

      }

    });
  }

  // onGetProgressQuestion(id: number){
  //   this.idProgress = +this.route.snapshot.params['id']
  //   console.log(this.idProgress);
  //   this.questionService.getQuestionInProgress(2).subscribe({
  //     next: (data: ProgressQuestion) =>{
  //     // this.lisQuestions = data.filter(q => q.id === this.idProgress)
  //       this.lisQuestions = data;
  //       console.log(this.lisQuestions);
  //       this.etat = this.lisQuestions.maxDurationInSeconds
  //       console.log(this.etat);

  //     }
  //   });

  // }
  onSaveForm(id1: number, id2: number){
    this.questionService.saveRecord(this.records)
    .subscribe({
      next: ((data: Recording) =>{
      this.records = data
      console.log(this.records);

      alert("success saving");
    })
    // this.router.navigateByUrl
  }
  )
}
  submit(){

  }


}
