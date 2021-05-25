import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './contact/contact.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    BrowserAnimationsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
