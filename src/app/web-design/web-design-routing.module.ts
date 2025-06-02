import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDesignComponent } from './web-design/web-design.component';


const routes: Routes = [
  { path: '', component: WebDesignComponent },
  { path: 'webdesign', component: WebDesignComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDesignRoutingModule {}
