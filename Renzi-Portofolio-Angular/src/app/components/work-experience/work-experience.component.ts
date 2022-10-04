import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private datosPortfolio: PortfolioService) { }
  experienceList: any;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienceList = data.workExperience;
    })
  }

}

