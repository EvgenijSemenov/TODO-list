import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let dateNow = new Date();
  	this.model = { date: { year: dateNow.getFullYear(), month: dateNow.getMonth(), day: dateNow.getDate() } };	
  }

  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  private model;

  getDate() {
  	let taskFinishDate = new Date(this.model.date.year, this.model.date.month, this.model.date.day).valueOf();
  	console.log(taskFinishDate);
  }
}
