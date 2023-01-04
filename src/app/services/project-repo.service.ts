import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectRepo } from '../model/project-repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoService {
  URL = environment.URL + 'projectRepo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ProjectRepo[]> {
    return this.httpClient.get<ProjectRepo[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ProjectRepo> {
    return this.httpClient.get<ProjectRepo>(this.URL + `detail/${id}`);
  }

  public save(project: ProjectRepo): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', project);
  }

  public update(id: number, project: ProjectRepo): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}
