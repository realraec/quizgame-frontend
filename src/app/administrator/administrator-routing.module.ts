import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator.component';
import { ListStagiairesComponent } from './components/list-stagiaires/list-stagiaires.component';

const routes: Routes = [
  {path: '' , component: AdministratorComponent},
  {path: 'intern/list',component: ListStagiairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
