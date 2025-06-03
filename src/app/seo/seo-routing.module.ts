import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoComponent } from './seo/seo.component';

const routes: Routes = [
  { path: '', component: SeoComponent },
  { path: 'seo_opt', component: SeoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeoRoutingModule {}
