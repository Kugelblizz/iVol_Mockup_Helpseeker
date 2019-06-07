import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {TasksFinishedComponent} from './tasks-finished.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule } from '@angular/material';
import { FuseWidgetModule } from '@fuse/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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

    BrowserAnimationsModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  exports: [
    TasksFinishedComponent
  ]
})

export class TasksFinishedModule {
}
