import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileApplicationRoutingModule } from './mobile-application-routing.module';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';



@NgModule({
  declarations: [
    MobileApplicationComponent,

  ],
  imports: [
    CommonModule,
    MobileApplicationRoutingModule
  ]
})
export class MobileApplicationModule { }
