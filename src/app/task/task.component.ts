import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TaskService } from './task.service';

@Component({
  selector: 'task',
  styleUrls: ['./task.component.css'],
  templateUrl: './task.component.html'
})
export class TaskComponent {
  constructor(
    private _taskService: TaskService,
  ) { }

  /**
   * Get data from the task service here and pass it to the list component, consider using pipes
   * https://angular.io/guide/pipes#pure-and-impure-pipes
   */
}