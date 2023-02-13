import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'administrator', data: { breadcrumb: 'Espace Administrateur' }, loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule) },
  { path: 'intern', data: { breadcrumb: 'Espace Stagiaire' }, loadChildren: () => import('./intern/intern.module').then(m => m.InternModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
