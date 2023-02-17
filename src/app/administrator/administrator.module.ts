import { NgModule } from '@angular/core';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdministratorComponent, NavbarAdminComponent],
  imports: [SharedModule, AdministratorRoutingModule],
})
export class AdministratorModule {}
