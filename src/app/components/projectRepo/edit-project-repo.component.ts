import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectRepo } from 'src/app/model/project-repo';
import { ImageService } from 'src/app/services/image.service';
import { ProjectRepoService } from 'src/app/services/project-repo.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-edit-project-repo',
  templateUrl: './edit-project-repo.component.html',
  styleUrls: ['./edit-project-repo.component.css']
})


export class EditProjectRepoComponent implements OnInit {
  project: ProjectRepo = null;
  safeImageUrl: any;

  constructor(
    private projectRepoService: ProjectRepoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    private sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectRepoService.detail(id).subscribe(
      data => {
        this.project = data;
        this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.project.img);
      }, err => {
        alert("Error, falló la actualización del proyecto");
        this.router.navigate(['']);
      }
    )
  
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.project.img = this.imageService.url;
    this.projectRepoService.update(id, this.project).subscribe(
      data => {
        alert("Experiencia actualizada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error, falló la actualización del proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "ProyectoRepo_" + id;
    this.imageService.uploadImage($event, name);
  }




}