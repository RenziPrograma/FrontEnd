import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  technicalSkillList: any;
  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {
     /* this.technicalSkillList = data.technicalSkills;*/
    })
  }

}

