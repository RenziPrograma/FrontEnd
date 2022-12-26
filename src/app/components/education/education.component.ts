import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];


  constructor(private educationService: EducationService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducation(): void {
    this.educationService.lista().subscribe(
      data => {
        this.education = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educationService.delete(id).subscribe(
        data => {
          alert("Educación borrada exitosamente");
          this.loadEducation();
        }, err => {
          alert("Error, la educación no se pudo borrar");
        }
      )
    }
  }
}
