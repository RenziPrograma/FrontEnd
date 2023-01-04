import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { WorkExperience } from 'src/app/model/work-experience';
import { TokenService } from 'src/app/services/token.service';
import { WorkExperienceServiceService } from 'src/app/services/work-experience-ser.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experiencia: WorkExperience[] = [];

  constructor(private workExperienceServiceService: WorkExperienceServiceService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.workExperienceServiceService.lista().subscribe(
      data => { this.experiencia = data; }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.workExperienceServiceService.delete(id).subscribe(
        data => {
          alert("Experiencia Borrada exitosamente");
          this.loadExperience();
        }, err => {
        alert("Error, no se pudo borrar la experiencia");
      }
      )
    }
  }
}

