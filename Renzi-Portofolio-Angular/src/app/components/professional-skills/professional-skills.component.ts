import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechSkills } from 'src/app/model/techSkills';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TechSkillsService } from 'src/app/services/tech-skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {
  skill: TechSkills[]= [];


  constructor(private techSkillsService: TechSkillsService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadTechSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadTechSkills(): void {
    this.techSkillsService.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.techSkillsService.delete(id).subscribe(
        data => {
          alert("Habilidad borrada exitosamente");
          this.loadTechSkills();
        }, err => {
          alert("Error, la habilidad no se pudo borrar");
        }
      )
    }
  }
}

