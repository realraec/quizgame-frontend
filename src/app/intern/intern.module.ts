import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternComponent } from './intern.component';


@NgModule({
  declarations: [
    InternComponent
  ],
  imports: [
    CommonModule,
    InternRoutingModule
  ]
})
export class InternModule { }
