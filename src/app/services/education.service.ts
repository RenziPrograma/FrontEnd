import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  EducationUrl = environment.URL + 'education/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.EducationUrl + 'lista');
  }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.EducationUrl + `detail/${id}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.EducationUrl + 'create', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.EducationUrl + `update/${id}`, education);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.EducationUrl +`delete/${id}`)
  }
}
