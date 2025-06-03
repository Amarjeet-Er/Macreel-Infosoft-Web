import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContainerComponent } from './container/container.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { SoftwaredevelopmentComponent } from './softwaredevelopment/softwaredevelopment.component';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
import { SeoComponent } from './seo/seo.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', component: ContainerComponent, },
      { path: 'webdesign', component: WebdesignComponent },
      { path: 'webdevelopment', component: WebdevelopmentComponent },
      { path: 'softwaredevelopment', component: SoftwaredevelopmentComponent },
      { path: 'mobileapplication', component: MobileApplicationComponent },
      { path: 'seo', component: SeoComponent },
      { path: 'digitalmarketing', component: DigitalmarketingComponent },
      {
        path: 'pages',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
