import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Task }           from '../../model/task';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private userName: string = "";
  private userPassword: string = "";
  private loginErrorMessage: string = "";

  constructor(private loginService: LoginService,
                private router: Router) {}

  ngOnInit() {
  }

  userLogin(){
    this.loginErrorMessage = "";
    this.loginService.login(this.userName, this.userPassword)
        .subscribe(statusCode => this.validCredentials(statusCode), failureStatusCode => {this.invalidCredentials(failureStatusCode)});
  }

  validCredentials(statusCode: number) {
    console.log(statusCode);
    if (statusCode == 200) {
      localStorage.setItem('currentUser', JSON.stringify({ name: this.userName, password: this.userPassword }));
      this.router.navigate(['/todo-list']);
    }
  }

  invalidCredentials(statusCode: number) {
    if (statusCode == 401) {
      this.loginErrorMessage = "Invalid user name and/or password.";
    } else {
      this.loginErrorMessage = "Server error. Please, try again later.";
    }
  }

}
