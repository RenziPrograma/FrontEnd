import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkExperience } from 'src/app/model/work-experience';

import { WorkExperienceServiceService } from 'src/app/services/work-experience-ser.service';

@Component({
  selector: 'app-new-work-experience',
  templateUrl: './new-work-experience.component.html',
  styleUrls: ['./new-work-experience.component.css']
})
export class NewWorkExperienceComponent implements OnInit {
  persona_id: number=1;
  businessName: string = '';
  position: string = '';
  startDate: string = '';
  endDate: string = '';
  currentJob: string = '';
  description: string = '';

  constructor(private workExperienceService: WorkExperienceServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const workExperience = new WorkExperience(
      this.persona_id,
      this.businessName,
      this.position,
      this.startDate,
      this.endDate,
      this.currentJob,
      this.description);
    this.workExperienceService.save(workExperience).subscribe(
      data =>{
      alert("Experiencia añadida exitosamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Error, experiencia falló");
      this.router.navigate(['']);
    })
  }

}
