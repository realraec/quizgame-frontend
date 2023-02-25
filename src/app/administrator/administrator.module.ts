import { NgModule } from '@angular/core';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ListInternComponent} from './components/intern/list-intern/list-intern.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { CreateInternComponent } from './components/intern/create-intern/create-intern.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';

@NgModule({
  declarations: [AdministratorComponent, NavbarAdminComponent, ListInternComponent, ListQuizComponent, CreateInternComponent, CreateQuizComponent],
  imports: [SharedModule, AdministratorRoutingModule],
})
export class AdministratorModule {}
