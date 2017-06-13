import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login/login.component';
import { TaskComponent } from './task-component/task/task.component';
import { TaskListComponent } from './task-component/task-list/task-list.component';
import { AddTaskComponent } from './task-component/add-task/add-task.component';
import { MyDatePickerModule } from 'mydatepicker';
import { LoginService } from './service/login.service';
import { TaskService } from './service/task.service';
import { TaskCategoryService } from './service/task-category.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CategoryListComponent } from './category-component/category-list/category-list.component';
import { AddCategoryComponent } from './category-component/add-category/add-category.component';
import { EditTaskComponent } from './task-component/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    TaskListComponent,
    AddTaskComponent,
    TopMenuComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'todo-list',
        component: TaskComponent
      },
      {
        path: 'add-task',
        component: AddTaskComponent
      },
      {
        path: 'edit-task/:id',
        component: EditTaskComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      }
    ]),
    MyDatePickerModule 
  ],
  providers: [
    LoginService,
    TaskService,
    TaskCategoryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
