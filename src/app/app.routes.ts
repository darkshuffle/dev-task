import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'task', component: TaskComponent}
];

