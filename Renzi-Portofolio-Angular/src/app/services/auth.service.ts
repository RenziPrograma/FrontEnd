import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerLogin } from '../model/customer-login';
import { JwtDto } from '../model/jwt-dto';
import { NewCustomer } from '../model/new-customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.URL+'auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newCustomer: NewCustomer): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', newCustomer);
  }

  public login(customerLogin: CustomerLogin): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', customerLogin);
  }

}
