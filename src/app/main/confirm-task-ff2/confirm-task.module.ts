import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '../../../@fuse/shared.module';

import {ConfirmFF2TaskComponent} from './confirm-task.component';
import { MatCommonModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatIconModule, MatDividerModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';



const routes = [
  {
      path     : 'confirmff2',
      component: ConfirmFF2TaskComponent
  }
];

@NgModule({
  declarations: [
    ConfirmFF2TaskComponent,
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
    ConfirmFF2TaskComponent
  ]
})

export class ConfirmTaskFF2Module {
}
