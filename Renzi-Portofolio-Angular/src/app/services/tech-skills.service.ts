import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TechSkills } from '../model/techSkills';

@Injectable({
  providedIn: 'root'
})
export class TechSkillsService {
  TechSkillsUrl = environment.URL + 'techSkills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TechSkills[]> {
    return this.httpClient.get<TechSkills[]>(this.TechSkillsUrl + 'lista');
  }

  public detail(id: number): Observable<TechSkills> {
    return this.httpClient.get<TechSkills>(this.TechSkillsUrl + `detail/${id}`);
  }

  public save(techSkills: TechSkills): Observable<any> {
    return this.httpClient.post<any>(this.TechSkillsUrl + 'create', techSkills);
  }

  public update(id: number, techSkills: TechSkills): Observable<any> {
    return this.httpClient.put<any>(this.TechSkillsUrl + `update/${id}`, techSkills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.TechSkillsUrl + `delete/${id}`)
  }
}
