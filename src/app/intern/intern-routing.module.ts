import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InternComponent } from './intern.component';

const routes: Routes = [
  {path:  '', component: LoginComponent},
 {path:  '/intern', component: InternComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule {

}
