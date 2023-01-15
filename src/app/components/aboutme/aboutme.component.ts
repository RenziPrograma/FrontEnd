import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona-service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: persona = {
    name: '',
    surname: '',
    position: '',
    base: '',
    email: '',
    telephone: '',
    profileImageUrl: '',
    representaImg: '',
    description: ''
  };


  constructor(private personaService: PersonaService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadPersona(): void {
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }


}
