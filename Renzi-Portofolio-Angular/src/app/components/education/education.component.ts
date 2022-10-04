import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  educationList: any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educationList = data.education;
    })
  }

}
