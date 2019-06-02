import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {TasksFinishedComponent} from './tasks-finished.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule } from '@angular/material';




const routes = [
  {
      path     : 'tasksfinished',
      component: TasksFinishedComponent
  }
];

@NgModule({
  declarations: [
    TasksFinishedComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,

    FuseSharedModule
  ],
  exports: [
    TasksFinishedComponent
  ]
})

export class TasksFinishedModule {
}
