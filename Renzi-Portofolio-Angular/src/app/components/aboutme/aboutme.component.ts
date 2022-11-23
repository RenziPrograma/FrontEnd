import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: persona = new persona("",
   "",
    "",
    "",
    "",
    "",
    "",
    "",
    "")
  constructor( public personaService:PortfolioService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      console.log(data);
      this.persona = data;
    });
  }

}
