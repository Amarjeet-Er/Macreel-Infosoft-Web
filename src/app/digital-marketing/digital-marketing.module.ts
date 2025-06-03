import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalMarketingRoutingModule } from './digital-marketing-routing.module';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';


@NgModule({
  declarations: [
    DigitalMarketingComponent,    
  ],
  imports: [
    CommonModule,
    DigitalMarketingRoutingModule
  ]
})
export class DigitalMarketingModule { }
