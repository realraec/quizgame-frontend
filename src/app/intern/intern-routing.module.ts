import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListQuestionnairesComponent } from './components/list-questionnaires/list-questionnaires.component';
import { InternComponent } from './intern.component';
import { NavbarInternComponent } from './components/navbar-intern/navbar-intern.component';


const routes: Routes = [
  {path:  '', component: LoginComponent},
 {path:  'intern', component: InternComponent},
 {path:  'navbar/intern', component: NavbarInternComponent},
 {path:  'list-questionnaires', component: ListQuestionnairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule {

}
