import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechSkills } from 'src/app/model/techSkills';
import { TechSkillsService } from 'src/app/services/tech-skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skill: TechSkills = null;

  constructor(private techSkillsService: TechSkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.techSkillsService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, error => {
        alert('Error, no se pudo modificar ');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.techSkillsService.update(id, this.skill).subscribe(
      data => {
        alert("Habilidad editada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error, la edición de la habilidad falló');
        this.router.navigate(['']);
      }
    )
  }
}
