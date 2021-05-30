import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './components/construction/construction.component';
import { TestPageComponent } from './components/test-page/test-page.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'resume', component:ResumeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'portfolio', component:PortfolioComponent},
  { path: 'projects', component:ConstructionComponent},
  { path: 'testPage', component:TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
