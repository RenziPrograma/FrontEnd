import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { ProjectRepoComponent } from './components/projectRepo/projectRepo.component';
import { PersonaService } from './services/persona-service';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewWorkExperienceComponent } from './components/work-experience/new-work-experience.component';
import { EditWorkExperienceComponent } from './components/work-experience/edit-work-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EdiEducationComponent } from './components/education/edit-education.component';
import { EditSkillsComponent } from './components/professional-skills/edit-skills.component';
import { NewSkillComponent } from './components/professional-skills/new-skill.component';
import { EditAboutMeComponent } from './components/aboutme/edit-about-me.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditProjectRepoComponent } from './components/projectRepo/edit-project-repo.component';
import { NewProjectRepoComponent } from './components/projectRepo/new-project-repo.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProfessionalSkillsComponent,
    ProjectRepoComponent,
    LoginComponent,
    PortfolioComponent,
    NewWorkExperienceComponent,
    EditWorkExperienceComponent,
    NewEducationComponent,
    EdiEducationComponent,
    EditSkillsComponent,
    NewSkillComponent,
    EditAboutMeComponent,
    EditProjectRepoComponent,
    NewProjectRepoComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
    
  ],
  providers: [PersonaService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
