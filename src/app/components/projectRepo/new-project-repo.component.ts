import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectRepo } from 'src/app/model/project-repo';
import { ImageService } from 'src/app/services/image.service';
import { ProjectRepoService } from 'src/app/services/project-repo.service';

@Component({
  selector: 'app-new-project-repo',
  templateUrl: './new-project-repo.component.html',
  styleUrls: ['./new-project-repo.component.css']
})
export class NewProjectRepoComponent implements OnInit {
  id: number = Date.now();
  persona_id: number = 1;
  name: string;
  link: string;
  img: string;
  description: string;
  safeImageUrl: any;
  

  constructor(private projectRepoService: ProjectRepoService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.img);

    const projectRepo = new ProjectRepo(
      this.id,
      this.persona_id,
      this.name,
      this.link,
      this.img = this.imageService.url,
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
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "ProyectoRepo_" + this.id;
    this.imageService.uploadImage($event, name);
  }
}