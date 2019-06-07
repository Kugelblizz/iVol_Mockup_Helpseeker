import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {TasksComponent} from './tasks.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuseWidgetModule } from '@fuse/components';




const routes = [
  {
      path     : 'tasks',
      component: TasksComponent
  }
];

@NgModule({
  declarations: [
    TasksComponent,
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
    TasksComponent
  ]
})

export class TasksModule {
}
