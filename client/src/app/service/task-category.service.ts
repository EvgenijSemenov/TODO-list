import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { TaskCategory } from '../model/task-category';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskCategoryService {

  private categoriesUrl = 'api/tasks/categories/';

  constructor(private http: Http) {}

  all() : Observable<TaskCategory[]> {
  	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  	let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.categoriesUrl, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  create(taskCategory: TaskCategory): Observable<TaskCategory> {
  	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  	let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
  	headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.categoriesUrl, JSON.stringify(taskCategory), options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  delete(id: number): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.categoriesUrl + id, options)
                         .map((res) => res)
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  update(taskCategory: TaskCategory): Observable<TaskCategory> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({"Authorization":"Basic " + btoa(currentUser.name + ":" + currentUser.password)});
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.categoriesUrl + taskCategory.id, JSON.stringify(taskCategory), options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(this.errorHandler(error)));
  }

  errorHandler(error: Response) {
  	console.log(error);
  }

}
