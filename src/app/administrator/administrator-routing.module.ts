import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { ListInternComponent } from './components/intern/list-intern/list-intern.component';
import { CreateInternComponent } from './components/intern/create-intern/create-intern.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';

const routes: Routes = [
  { path: '', component: AdministratorComponent },
  { path: 'intern/list', component: ListInternComponent },
  { path: 'intern/create', component: CreateInternComponent },
  { path: 'quiz/list', component: ListQuizComponent },
  { path: 'quiz/create', component: CreateQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
