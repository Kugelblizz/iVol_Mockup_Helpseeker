import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '../../../@fuse/shared.module';

import {ConfirmTaskComponent} from './confirm-task.component';
import { MatCommonModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatIconModule, MatDividerModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';



const routes = [
  {
      path     : 'confirm',
      component: ConfirmTaskComponent
  }
];

@NgModule({
  declarations: [
    ConfirmTaskComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatCommonModule,
    MatTabsModule,
    
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,

    FuseSharedModule
  ],
  exports: [
    ConfirmTaskComponent
  ]
})

export class ConfirmTaskModule {
}
