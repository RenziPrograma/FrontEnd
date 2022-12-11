
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditWorkExperienceComponent } from './components/work-experience/edit-work-experience.component';
import { NewWorkExperienceComponent } from './components/work-experience/new-work-experience.component';


const routes: Routes = [
    { path: '', component: PortfolioComponent},
    { path: 'login', component: LoginComponent },
    { path: 'newExp', component: NewWorkExperienceComponent },
    { path: 'editExp/:id', component:EditWorkExperienceComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}