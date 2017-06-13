import { Component, OnInit } from '@angular/core';

import { Task } from '../../model/task'; 
import { TaskCategory } from '../../model/task-category';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {	

  private doneTasks: Task[] = [];
  private inprogressTasks: Task[] = [];

  constructor(private taskService: TaskService,
      private router: Router
  ) { }

  ngOnInit() {
    this.taskService.all().subscribe(tasks => this.updateTaskList(tasks), err => {console.log(err)});
  }

  updateTaskList(tasks: Task[]) {
    console.log(tasks);
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
    let now: Date = new Date(Date.now());
    inprogressTask.doneDate = now;
    this.taskService.update(inprogressTask).subscribe(() => this.ngOnInit(), err => {console.log(err)});
  }

  taskInProgress(doneTask: Task) {
    doneTask.doneDate = null;
    this.taskService.update(doneTask).subscribe(() => this.ngOnInit(), err => {console.log(err)});
  }

  deleteTask(deleteTask: Task) {
    this.taskService.delete(deleteTask.id).subscribe(() => this.ngOnInit(), err => {console.log(err)});
  }

  editTask(task: Task) {
    this.router.navigate(['/edit-task', task.id]);
  }

}
