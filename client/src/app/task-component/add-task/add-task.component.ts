import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Task } from '../../model/task'; 
import { TaskCategory } from '../../model/task-category'; 
import { TaskService } from '../../service/task.service';
import { TaskCategoryService } from '../../service/task-category.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

  @Output() createTask$: EventEmitter<boolean>;

  private task: Task = new Task();
  private taskCategories: TaskCategory[] = [];
  private defaultCategory = {"id": null, "name" : "Default"};
  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  private model;

  constructor(private taskService: TaskService, private taskCategoryService: TaskCategoryService) {
    this.createTask$ = new EventEmitter();
  }

  ngOnInit() {
    this.taskCategoryService.all().subscribe(taskCategories => this.initTaskCategory(taskCategories), error => console.log(error));
  	this.initTask();
    this.initDate();
  }

  initTask() {
    this.task = new Task();
    this.task.taskCategory = this.defaultCategory;
  }

  initTaskCategory(taskCategories: TaskCategory[]) {
    this.taskCategories = [];
    this.taskCategories.push(this.defaultCategory);
    for (var taskCategory of taskCategories) {
      this.taskCategories.push(taskCategory);
    }
    console.log(this.taskCategories);
  }

  initDate() {
    let dateNow = new Date();
    this.model = { date: { year: dateNow.getFullYear(), month: dateNow.getMonth(), day: dateNow.getDate() } };  
  }

  getDate() {
  	let taskFinishDate = new Date(this.model.date.year, this.model.date.month, this.model.date.day).valueOf();
  	console.log(taskFinishDate);
  }

  createTask() {
    if (this.task.taskCategory == this.defaultCategory) {
      this.task.taskCategory = null;
    }
    this.task.doneAtDate = new Date(this.iso8601Date());
    this.taskService.create(this.task).subscribe(() => this.createEvent(), error => console.log(error));
  }

  createEvent() {
    this.createTask$.emit(true);
    this.ngOnInit();
  }

  iso8601Date() {
    let month: string = ((this.model.date.month < 10) ? ("0" + this.model.date.month) : this.model.date.month);
    let day: string = ((this.model.date.day < 10) ? ("0" + this.model.date.day) : this.model.date.day);
    return (this.model.date.year + '-' + month + "-" + day + "T00:00:00Z");
  }

}
