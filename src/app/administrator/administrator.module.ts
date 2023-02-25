import { NgModule } from '@angular/core';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ListStagiairesComponent } from './components/list-stagiaires/list-stagiaires.component';

@NgModule({
  declarations: [AdministratorComponent, NavbarAdminComponent, ListStagiairesComponent],
  imports: [SharedModule, AdministratorRoutingModule],
})
export class AdministratorModule {}
