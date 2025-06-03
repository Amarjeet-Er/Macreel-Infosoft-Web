import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';


const routes: Routes = [
  { path: '', component: MobileApplicationComponent },
  { path: 'mobile_app', component: MobileApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileApplicationRoutingModule {}
