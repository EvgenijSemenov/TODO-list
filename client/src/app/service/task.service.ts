import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Task } from '../model/task';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {

  private tasksUrl = 'api/tasks/';

  constructor(private http: Http) {}

  all() : Observable<Task[]> {
  	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  	let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.tasksUrl, options)
                         .map((res:Response) => <Task[]>res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  findById(id: number) : Observable<Task> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.tasksUrl + id, options)
                         .map((res:Response) => <Task[]>res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  create(task: Task): Observable<Task> {
  	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  	let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
  	headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.tasksUrl, JSON.stringify(task), options)
                         .map((res:Response) => <Task>res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  delete(id: number): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.tasksUrl + id, options)
                         .map((res) => res)
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  update(task: Task): Observable<Task> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.tasksUrl + task.id, JSON.stringify(task), options)
                         .map((res:Response) => <Task>res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  errorHandler(error: Response) {
  	console.log(error);
  }

}
