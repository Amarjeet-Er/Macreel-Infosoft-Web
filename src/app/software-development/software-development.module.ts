import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareDevelopmentRoutingModule } from './software-development-routing.module';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';


@NgModule({
  declarations: [
    SoftwareDevelopmentComponent,    
  ],
  imports: [
    CommonModule,
    SoftwareDevelopmentRoutingModule
  ]
})
export class SoftwareDevelopmentModule { }
