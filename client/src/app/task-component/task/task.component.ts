import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'task-component',
  templateUrl: './task.html'
})
export class TaskComponent implements OnInit {

  constructor(private router: Router) {
  	this.checkUserLogin();
  }

  ngOnInit() {
  }

  checkUserLogin(): boolean{
    if (localStorage.getItem("currentUser") == null) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
