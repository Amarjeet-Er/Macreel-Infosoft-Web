import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
import { SeoComponent } from './seo/seo.component';
import { SoftwaredevelopmentComponent } from './softwaredevelopment/softwaredevelopment.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { VissonComponent } from './visson/visson.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'webdesign', component: WebdesignComponent },
  { path: 'webdevelopment', component: WebdevelopmentComponent },
  { path: 'softwaredevelopment', component: SoftwaredevelopmentComponent },
  { path: 'mobileapplication', component: MobileApplicationComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'digitalmarketing', component: DigitalmarketingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ourteam', component: OurTeamComponent },
  { path: 'directorMsg', component: DirectorMessageComponent },
  { path: 'visson', component: VissonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'terms', component: TermsConditionComponent },
  { path: 'privacy', component: PrivacyComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
