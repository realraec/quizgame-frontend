import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { ListInternComponent } from './components/intern/list-intern/list-intern.component';
import { CreateInternComponent } from './components/intern/create-intern/create-intern.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { UpdateInternComponent } from './components/intern/update-intern/update-intern.component';
import { UpdateQuizComponent } from './components/quiz/update-quiz/update-quiz.component';
import { ListQuestionComponent } from './components/quiz/questions/list-question/list-question.component';
import { CreateQuestionComponent } from './components/quiz/questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/quiz/questions/update-question/update-question.component';
import { UpdateAdminComponent } from './components/admin/update/update-admin.component';
import { UpdatePasswordComponent } from './components/admin/update-password/update-password.component';

const routes: Routes = [
  { path: '', component: AdministratorComponent },
  { path: 'intern/list', component: ListInternComponent },
  { path: 'intern/create', component: CreateInternComponent },
  { path: 'intern/update/:id', component: UpdateInternComponent },
  { path: 'admin/update/:id', component: UpdateAdminComponent },
  { path: 'admin/update/password/:id', component: UpdatePasswordComponent },
  { path: 'quiz/list', component: ListQuizComponent },
  { path: 'quiz/create', component: CreateQuizComponent },
  { path: 'quiz/update/:id', component: UpdateQuizComponent },
  { path: 'quiz/:id/question/list', component: ListQuestionComponent },
  {path: 'quiz/:id/question/create', component: CreateQuestionComponent},
  {path: 'quiz/:idQuiz/question/update/:idQuestion', component: UpdateQuestionComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
