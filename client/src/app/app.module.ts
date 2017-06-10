import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    TodoListComponentComponent,
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponentComponent
      },
      {
        path: 'todo-list',
        component: TodoListComponentComponent
      },
      {
        path: 'add-task',
        component: AddTaskComponent
      }
    ]),
    MyDatePickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
