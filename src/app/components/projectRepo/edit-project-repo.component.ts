import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectRepo } from 'src/app/model/project-repo';
import { ImageService } from 'src/app/services/image.service';
import { ProjectRepoService } from 'src/app/services/project-repo.service';

@Component({
  selector: 'app-edit-project-repo',
  templateUrl: './edit-project-repo.component.html',
  styleUrls: ['./edit-project-repo.component.css']
})
export class EditProjectRepoComponent implements OnInit {
  project: ProjectRepo = null;

  constructor(
    private projectRepoService: ProjectRepoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) { }



  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectRepoService.detail(id).subscribe(
      data => {
        this.project = data;
      }, err => {
        alert("Error, falló la actualización del proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.imageService.url != "") {
      this.project.img = this.imageService.url;
    }
    this.projectRepoService.update(id, this.project).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      })

    this.imageService.clearUrl();

  }



  //onUpdate(): void {
  //const id = this.activatedRouter.snapshot.params['id'];
  //this.project.img = this.imageService.url
  //this.projectRepoService.update(id, this.project).subscribe(
  //data => {
  //this.router.navigate(['']);
  //}, err => {
  //alert("Error, falló la actualización del proyecto");
  //this.router.navigate(['']);
  //}
  //)
  //}

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "ProyectoRepo_" + id;
    this.imageService.uploadImage($event, name);
  }

}