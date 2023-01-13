import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona-service';
import { RepresentaImgService } from 'src/app/services/representa-img.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {
  persona: persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private representaImgService: RepresentaImgService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error, falló la actualización de la Persona");
        this.router.navigate(['']);
      }
    )
  }

  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.profileImageUrl = this.imageService.url
    this.persona.representaImg = this.representaImgService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("Persona actualizada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error, falló la actualización de la Persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil" + id;
    this.imageService.uploadImage($event, name);
  }

  uploadImage2($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Representa_" + id;
    this.representaImgService.uploadImage2($event, name);
  }

}
