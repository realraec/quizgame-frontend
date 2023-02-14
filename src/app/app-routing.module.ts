import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'administrator', data: { breadcrumb: 'Espace Administrateur' }, loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule) },
  { path: 'intern', data: { breadcrumb: 'Espace Stagiaire' }, loadChildren: () => import('./intern/intern.module').then(m => m.InternModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
