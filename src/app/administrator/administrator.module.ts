import { NgModule } from '@angular/core';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ListInternComponent} from './components/intern/list-intern/list-intern.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { CreateInternComponent } from './components/intern/create-intern/create-intern.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { UpdateInternComponent } from './components/intern/update-intern/update-intern.component';
import { UpdateQuizComponent } from './components/quiz/update-quiz/update-quiz.component';
import { ListQuestionComponent } from './components/quiz/questions/list-question/list-question.component';
import { CreateQuestionComponent } from './components/quiz/questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/quiz/questions/update-question/update-question.component';
import { UpdateAdminComponent } from './components/admin/update-admin.component';

@NgModule({
  declarations: [AdministratorComponent, UpdateInternComponent, NavbarAdminComponent, ListInternComponent, ListQuizComponent, CreateInternComponent, CreateQuizComponent,  UpdateAdminComponent, UpdateQuizComponent, ListQuestionComponent, CreateQuestionComponent, UpdateQuestionComponent],
  imports: [SharedModule, AdministratorRoutingModule],
})
export class AdministratorModule {}
