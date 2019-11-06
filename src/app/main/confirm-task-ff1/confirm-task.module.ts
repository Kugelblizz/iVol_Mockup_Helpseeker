import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '../../../@fuse/shared.module';

import {ConfirmFFTaskComponent} from './confirm-task.component';
import { MatCommonModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatIconModule, MatDividerModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';



const routes = [
  {
      path     : 'confirmff1',
      component: ConfirmFFTaskComponent
  }
];

@NgModule({
  declarations: [
    ConfirmFFTaskComponent,
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
    ConfirmFFTaskComponent
  ]
})

export class ConfirmTaskFFModule {
}
