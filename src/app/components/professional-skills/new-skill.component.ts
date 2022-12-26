import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechSkills } from 'src/app/model/techSkills';
import { TechSkillsService } from 'src/app/services/tech-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  persona_id: number = 1;
  skillName: string;
  skillLevel: number;

  constructor(private techSkillsService :TechSkillsService,private  router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const techSkills = new TechSkills(
      this.persona_id,
      this.skillName,
      this.skillLevel
    );
    this.techSkillsService.save(techSkills).subscribe(
      data => {
        alert("Nueva habilidad añadida exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error, agregar habilidad falló");
        this.router.navigate(['']);
      }
    )
  }

}
