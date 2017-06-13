import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'TODO-list';

  constructor(private router: Router) {}

  ngOnInit() {
  	console.log(this.checkUserLogin())
  	if (this.checkUserLogin()) {
  	  this.router.navigate(['/todo-list']);
  	}
  }

  logout() {
  	localStorage.removeItem("currentUser");
  }

  checkUserLogin(): boolean{
    if (localStorage.getItem("currentUser") == null) {
      return false;
    }
    return true;
  }

  userName(): string {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.name;
  }
  
}
