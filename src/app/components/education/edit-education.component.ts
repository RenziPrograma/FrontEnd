import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EdiEducationComponent implements OnInit {
  education: Education = null;

  constructor(private educationService:EducationService, private activatedRoute: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      data => {
        this.education = data;
      }, error => {
        alert('Error, no se pudo modificar ');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe(
      data => {
        alert("Educación editada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error, la edición de la educación falló');
        this.router.navigate(['']);
      }
    )
  }
}
