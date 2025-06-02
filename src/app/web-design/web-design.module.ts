import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDesignRoutingModule } from './web-design-routing.module';
import { WebDesignComponent } from './web-design/web-design.component';



@NgModule({
  declarations: [
    WebDesignComponent,

  ],
  imports: [
    CommonModule,
    WebDesignRoutingModule
  ]
})
export class WebDesignModule { }
