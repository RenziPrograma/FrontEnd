import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectRepo } from 'src/app/model/project-repo';
import { ProjectRepoService } from 'src/app/services/project-repo.service';

@Component({
  selector: 'app-new-project-repo',
  templateUrl: './new-project-repo.component.html',
  styleUrls: ['./new-project-repo.component.css']
})
export class NewProjectRepoComponent implements OnInit {
  persona_id: number = 1;
  name: string;
  link: string;
  img: string;
  description: string;

  constructor(private projectRepoService: ProjectRepoService,
     private router: Router
      ) { }

  ngOnInit(): void {
  }

  onCreate(): void { 
    const projectRepo = new ProjectRepo(
      this.persona_id,
      this.name,
      this.link,
      this.img,
      this.description
    );
    this.projectRepoService.save(projectRepo).subscribe(
      data => {
        alert("Nuevo proyecto añadido exitosamente al repositorio");
        this.router.navigate(['']);
      }, err => {
        alert("Error, agregar proyecto al repositorio falló");
        this.router.navigate(['']);
      }
    )
    
  }


  uploadImage($event: any) {
  }
}
