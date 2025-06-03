import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ContainerComponent } from './container/container.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
import { SeoComponent } from './seo/seo.component';
import { SoftwaredevelopmentComponent } from './softwaredevelopment/softwaredevelopment.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { VissonComponent } from './visson/visson.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    EnquiryFormComponent,
    WebdesignComponent,
    WebdevelopmentComponent,
    SoftwaredevelopmentComponent,
    MobileApplicationComponent,
    SeoComponent,
    DigitalmarketingComponent,
    AboutComponent,
    OurTeamComponent,
    DirectorMessageComponent,
    VissonComponent,
    BlogsComponent,
    ContactComponent,
    TermsConditionComponent,
    PrivacyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    SwiperModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
