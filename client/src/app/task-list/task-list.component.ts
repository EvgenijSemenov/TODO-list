import { Component, OnInit } from '@angular/core';

import { Task } from '../task'; 
import { TaskCategory } from '../task-category';

const HOME_CATEGORY: TaskCategory = {id: 1, name: 'Home'};
const WORK_CATEGORY: TaskCategory = {id: 2, name: 'Work'};

const TASKS: Task[] = [
  { id: 1, description: 'Todo 1', doneAtDate: Date.now(), doneDate: Date.now(), category: HOME_CATEGORY},
  { id: 2, description: 'Todo 2', doneAtDate: Date.now(), doneDate: null , category: HOME_CATEGORY},
  { id: 3, description: 'Todo 3', doneAtDate: Date.now(), doneDate: null, category: WORK_CATEGORY},
  { id: 4, description: 'Todo 4', doneAtDate: Date.now(), doneDate: Date.now(), category: HOME_CATEGORY},
  { id: 5, description: 'Todo 5', doneAtDate: Date.now(), doneDate: Date.now(), category: WORK_CATEGORY}
];

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {	

  constructor() { }

  ngOnInit() {
    this.initTaskList(TASKS);
  }

  doneTasks: Task[] = [];
  inprogressTasks: Task[] = [];

  initTaskList(tasks: Task[]) {
    this.doneTasks = [];
    this.inprogressTasks = [];
    for (var task of tasks) {
      if (task.doneDate) {
        this.doneTasks.push(task);
      } else {
        this.inprogressTasks.push(task);
      }
    }
  }

  isFinished(task: Task): boolean {
  	console.log(task.doneDate != null);
  	return task.doneDate != null;
  }

  taskDone(inprogressTask: Task) {
    this.inprogressTasks = this.inprogressTasks.filter(task => task !== inprogressTask);
    inprogressTask.doneDate = Date.now();
    this.doneTasks.push(inprogressTask);
  }

  taskInProgress(doneTask: Task) {
    this.doneTasks = this.doneTasks.filter(task => task !== doneTask);
    doneTask.doneDate = null;
    this.inprogressTasks.push(doneTask);
  }

  deleteTask(deleteTask: Task) {
    this.inprogressTasks.splice(this.inprogressTasks.indexOf(deleteTask), 1);
  }

}
