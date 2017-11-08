import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { RestService } from './../rest.service';

@Injectable()
export class TaskService {

  constructor(
    private _restService: RestService,
  ) { }

  /**
   * Call the rest service getData from here
   * You can use promises or observables
   * https://stackoverflow.com/questions/37364973/angular-promise-vs-observable?rq=1
   * http://blog.rangle.io/observables-and-reactive-programming-in-angular-2/
   */
}