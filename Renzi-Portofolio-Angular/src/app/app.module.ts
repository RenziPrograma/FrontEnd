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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProfessionalSkillsComponent,
    RepositoryComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
