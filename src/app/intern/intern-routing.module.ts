import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListQuestionnairesComponent } from './components/list-questionnaires/list-questionnaires.component';
import { InternComponent } from './intern.component';
import { NavbarInternComponent } from './components/navbar-intern/navbar-intern.component';
import { QuestionnairesItemsComponent } from './components/questionnaires-items/questionnaires-items.component';
import { QuestionProgressComponent } from './components/question-progress/question-progress.component';
import { ResultatsComponent } from './components/resultats/resultats.component';


const routes: Routes = [
  {path:  '', component: InternComponent},
 {path:  'liste/questionnaires', component: InternComponent},
 {path:  'candidature-spontanee', component: },
 {path:  'liste/questionnaires/:id', component: QuestionnairesItemsComponent},
//  {path:  'questions/progress', component: QuestionProgressComponent},
 {path:  'questions/progress/:id', component: QuestionProgressComponent},
 {path:  'questions/resultats', component: ResultatsComponent},
 {path:  'navbar', component: NavbarInternComponent},
//  {path:  'list-questionnaires', component: ListQuestionnairesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule {

}
