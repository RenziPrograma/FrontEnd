import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkExperience } from 'src/app/model/work-experience';
import { WorkExperienceServiceService } from 'src/app/services/work-experience-ser.service';

@Component({
  selector: 'app-edit-work-experience',
  templateUrl: './edit-work-experience.component.html',
  styleUrls: ['./edit-work-experience.component.css']
})
export class EditWorkExperienceComponent implements OnInit {
  expLab: WorkExperience = null;
  constructor(private workExperienceService: WorkExperienceServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.workExperienceService.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err=>{
      alert("Error, falló la actualización de la experiencia");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.workExperienceService.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia actualizada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error, falló la actualización de la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
