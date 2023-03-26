import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternComponent } from './intern.component';
import { ListQuestionnairesComponent } from './components/list-questionnaires/list-questionnaires.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarInternComponent } from './components/navbar-intern/navbar-intern.component';
import { QuestionnairesItemsComponent } from './components/questionnaires-items/questionnaires-items.component';
import { QuestionProgressComponent } from './components/question-progress/question-progress.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { FileDarianeComponent } from './components/file-dariane/file-dariane.component';




@NgModule({
  declarations: [
    InternComponent,
    LoginComponent,
    ListQuestionnairesComponent,
    NavbarInternComponent,
    QuestionnairesItemsComponent,
    QuestionProgressComponent,
    ResultatsComponent,
    FileDarianeComponent,
  ],
  imports: [
    CommonModule,
    InternRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InternModule { }
