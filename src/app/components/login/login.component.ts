import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerLogin } from 'src/app/model/customer-login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  isLogged = false;
  isLoggingFail = false;
  customerLogin!: CustomerLogin;
  customerName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;



  constructor(private formBuilder: FormBuilder, private tokenService: TokenService, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group(
      {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
            })
     }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoggingFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.customerLogin = new CustomerLogin(this.customerName, this.password);
        this.authService.login(this.customerLogin).subscribe(data => {
        this.isLogged = true;
        this.isLoggingFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.customerName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.isLoggingFail = true;
        this.errMsj=err.error.mensaje;
        console.log(this.errMsj);
      })
  }

  get Email() {
    return this.form.get("Email");
  }

  get Password() {
    return this.form.get("Password");
  }

}
