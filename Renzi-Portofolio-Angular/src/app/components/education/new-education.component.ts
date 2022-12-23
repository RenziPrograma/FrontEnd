import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  persona_id: number = 1;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;

  constructor(private educationService:EducationService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const education = new Education(
      this.persona_id,
      this.schoolName,
      this.degree,
      this.startDate,
      this.endDate,
      this.description
    );
    this.educationService.save(education).subscribe(
      data => {
        alert("Nueva educación añadida exitosamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Error, agregar educación falló");
        this.router.navigate(['']);
      }
    )
  }
}
