import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../model/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceServiceService {
  workExperienceURL = 'http://localhost:8080/explab/'
  
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<WorkExperience[]>{
    return this.httpClient.get<WorkExperience[]>(this.workExperienceURL + 'lista');
  }

  public detail(id: number): Observable<WorkExperience>{
    return this.httpClient.get<WorkExperience>(this.workExperienceURL + `detail/${id}`);
  }

  public save(workExperience: WorkExperience): Observable<any>{
    return this.httpClient.post<any>(this.workExperienceURL + 'create', workExperience);
  }

  public update(id: number, workExperience: WorkExperience): Observable<any>{
    return this.httpClient.put<any>(this.workExperienceURL + `update/${id}`, workExperience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.workExperienceURL + `delete/${id}`);
  }

}
