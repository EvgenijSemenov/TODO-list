import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { TaskCategoryService } from '../../service/task-category.service';
import { Task } from '../../model/task';
import { TaskCategory } from '../../model/task-category';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {

  task: Task = new Task();
  private taskCategories: TaskCategory[] = [];
  private defaultCategory = {"id": null, "name" : "Default"};
  private model;
  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private activatedRoute: ActivatedRoute,
  		private taskService: TaskService,
  		private taskCategoryService: TaskCategoryService,
  		private router: Router
  ) { }

  ngOnInit() {
  	this.findTaskById(this.activatedRoute.snapshot.params['id']);
  	this.taskCategoryService.all().subscribe(taskCategories => this.initTaskCategory(taskCategories), error => console.log(error));
  }

  initTask(task: Task) {
    if (task.taskCategory == null) {
      task.taskCategory = this.defaultCategory;
    }
	this.task = task;
	this.initDate(new Date(task.doneAtDate));
  }

  initTaskCategory(taskCategories: TaskCategory[]) {
    this.taskCategories = [];
    this.taskCategories.push(this.defaultCategory);
    for (var taskCategory of taskCategories) {
      this.taskCategories.push(taskCategory);
    }
    console.log(this.taskCategories);
  }

  initDate(date: Date) {
    this.model = { date: { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() } };  
  }

  findTaskById(id: number) {
  	this.taskService.findById(id).subscribe(task => this.initTask(task), err => console.log(err));
  }

  updateTask() {
  	if (this.task.taskCategory == this.defaultCategory) {
      this.task.taskCategory = null;
    }
    this.task.doneAtDate = new Date(this.iso8601Date());
  	this.taskService.update(this.task).subscribe(() => this.navigateToTaskList(), err => console.log(err))
  }

  navigateToTaskList() {
  	this.router.navigate(['/todo-list'])
  }

  iso8601Date() {
    let month: string = ((this.model.date.month < 10) ? ("0" + this.model.date.month) : this.model.date.month);
	let day: string = ((this.model.date.day < 10) ? ("0" + this.model.date.day) : this.model.date.day);
    return (this.model.date.year + '-' + month + "-" + day + "T00:00:00Z");
  }
  
}
