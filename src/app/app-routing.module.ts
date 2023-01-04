
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAboutMeComponent } from './components/aboutme/edit-about-me.component';
import { EdiEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditSkillsComponent } from './components/professional-skills/edit-skills.component';
import { NewSkillComponent } from './components/professional-skills/new-skill.component';
import { EditProjectRepoComponent } from './components/projectRepo/edit-project-repo.component';
import { NewProjectRepoComponent } from './components/projectRepo/new-project-repo.component';
import { EditWorkExperienceComponent } from './components/work-experience/edit-work-experience.component';
import { NewWorkExperienceComponent } from './components/work-experience/new-work-experience.component';


const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newExp', component: NewWorkExperienceComponent },
    { path: 'editExp/:id', component: EditWorkExperienceComponent },
    { path: 'newEdu', component: NewEducationComponent },
    { path: 'editEdu/:id', component: EdiEducationComponent },
    { path: 'newSkill', component: NewSkillComponent },
    { path: 'editSkill/:id', component: EditSkillsComponent },
    { path: 'editPersona/:id', component: EditAboutMeComponent },
    { path: 'newProject', component: NewProjectRepoComponent },
    { path: 'editProject/:id', component: EditProjectRepoComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}