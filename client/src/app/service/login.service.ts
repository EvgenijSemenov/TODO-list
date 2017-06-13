import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Task }           from '../model/task';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  private tasksUrl = 'api/tasks/';

  constructor(private http: Http) {}

  login(name: string, password: string) : Observable<number> {
  	let headers = new Headers({"Authorization":"Basic " + btoa(name + ":" + password)});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.tasksUrl, options)
                         .map((res:Response) => res.status)
                         .catch((error:Response) => Observable.throw(error.status));
  }

  errorHandler(error: Response) {
  	console.log(error);
  }

}
