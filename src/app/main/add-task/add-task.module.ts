import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {AddTaskComponent} from './add-task.component';
import { MatStepperModule, MatCommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDatepickerModule } from '@angular/material';



const routes = [
  {
      path     : 'task/add',
      component: AddTaskComponent
  }
];

@NgModule({
  declarations: [
    AddTaskComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatCommonModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,

    FuseSharedModule
  ],
  exports: [
    AddTaskComponent
  ]
})

export class AddTaskModule {
}
