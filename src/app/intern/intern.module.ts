import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternComponent } from './intern.component';
import { ListQuestionnairesComponent } from './components/list-questionnaires/list-questionnaires.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarInternComponent } from './components/navbar-intern/navbar-intern.component';


@NgModule({
  declarations: [
    InternComponent,
    LoginComponent,
    ListQuestionnairesComponent,
    NavbarInternComponent
  ],
  imports: [
    CommonModule,
    InternRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InternModule { }
