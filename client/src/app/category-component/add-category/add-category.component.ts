import { Component, OnInit } from '@angular/core';
import { TaskCategory } from '../../model/task-category'; 
import { TaskCategoryService } from '../../service/task-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent implements OnInit {

  taskCategory: TaskCategory = new TaskCategory();

  constructor(private taskCategoryService: TaskCategoryService,
  	  private router: Router
  ) { }

  ngOnInit() {
  }

  createTaskCategory() {
  	this.taskCategoryService.create(this.taskCategory).subscribe( () => this.navigateToTaskList(), err => console.log(err));
  }

  navigateToTaskList() {
  	this.router.navigate(['/todo-list'])
  }

}
