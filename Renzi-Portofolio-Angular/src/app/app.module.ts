import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewWorkExperienceComponent } from './components/work-experience/new-work-experience.component';
import { EditWorkExperienceComponent } from './components/work-experience/edit-work-experience.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProfessionalSkillsComponent,
    RepositoryComponent,
    LoginComponent,
    PortfolioComponent,
    NewWorkExperienceComponent,
    EditWorkExperienceComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [PortfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
