import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {VerifyCompetenceComponent} from './verify-competence.component';
import { MatIconModule, MatCheckboxModule, MatCommonModule, MatOptionModule, MatSelectModule, MatTableModule, MatRadioModule } from '@angular/material';



const routes = [
  {
      path     : 'verifycompetence',
      component: VerifyCompetenceComponent
  }
];

@NgModule({
  declarations: [
    VerifyCompetenceComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatCommonModule,
    MatIconModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,

    MatRadioModule,
    
    


    FuseSharedModule
  ],
  exports: [
    VerifyCompetenceComponent
  ]
})

export class VerifyCompetenceModule {
}
