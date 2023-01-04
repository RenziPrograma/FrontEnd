import { Component, OnInit } from '@angular/core';
import { ProjectRepo } from 'src/app/model/project-repo';
import { ProjectRepoService } from 'src/app/services/project-repo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projectRepo',
  templateUrl: './projectRepo.component.html',
  styleUrls: ['./projectRepo.component.css']
})
export class ProjectRepoComponent implements OnInit {
  project: ProjectRepo[] = [];

  constructor(private projectRepoService: ProjectRepoService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadProject(): void {
    this.projectRepoService.lista().subscribe(
      data => { this.project = data; }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.projectRepoService.delete(id).subscribe(
        data => {
          alert("Proyecto Borrado exitosamente del repositorio");
          this.loadProject();
        }, err => {
          alert("Error, no se pudo el proyecto del repositorio");
        }
      )
    }
  }

}
