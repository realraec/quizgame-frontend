import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Intern } from 'src/app/shared/models/intern.model';
import { Question } from 'src/app/shared/models/question.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { InternService } from 'src/app/shared/services/intern.service';
import { QuestionService } from 'src/app/shared/services/question.service';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent {
  questions: Question[] = [];
  addInternForm!: FormGroup;
  id!: number;
  interns!: Intern[];
  participants!: Intern[];

  quiz: Quiz = {
    questionsIds: []
  };
  internSelect!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllQuestionsByIdQuiz(this.id);
    this.getAllAttributedInterns();
    this.getAllNotAttributedInterns();
    this.initForm();
  }

  initForm(){
    this.addInternForm = this.formBuilder.group({
      intern: ['', Validators.required],

    });
  }

  constructor(private internService: InternService,     private formBuilder: FormBuilder,
    private quizService: QuizService, private questionService: QuestionService, private route: ActivatedRoute) {}


  getAllNotAttributedInterns(){

    this.quizService.getAllInterNotAttributedToQuiz(this.id).subscribe({

      next: (data) => this.interns = data

    });
  }

  getAllAttributedInterns(){

    this.quizService.getAllInterAttributedToQuiz(this.id).subscribe({

      next: (data) => this.participants = data

    });
  }


  getAllQuestionsByIdQuiz(id: number){
    this.quizService.getOneQuiz(id).subscribe(
      {
        next: (data) => this.quiz = data,
        complete: () => this.initQuestions()

      }
    )
  }

  initQuestions() {
    this.quiz.questionsIds.forEach((value: any)=> this.questionService.getOneQuestion(
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

  selectChangeHandler (event: any) {
    //update the ui
    this.internSelect = event.target.value;
  }
  deleteIntern(idIntern: number){




    this.quizService.removeInternToQuiz(this.id, idIntern).subscribe({
      complete: ()=> window.location.reload()
    })

  }

  addIntern(){

    this.internSelect = this.addInternForm.value['intern'];

    console.log(this.internSelect);

    this.quizService.addInternToQuiz(this.id, this.internSelect).subscribe({
      complete: ()=> window.location.reload()
    })
  }
}
