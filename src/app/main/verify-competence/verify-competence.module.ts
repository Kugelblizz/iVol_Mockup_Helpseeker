import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {VerifyCompetenceComponent, FakeUploader} from './verify-competence.component';
import { MatIconModule, MatCheckboxModule, MatCommonModule, MatOptionModule, MatSelectModule, MatTableModule, MatRadioModule, MatButtonModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule, MatProgressBar, MatProgressBarModule } from '@angular/material';



const routes = [
  {
      path     : 'verifycompetence',
      component: VerifyCompetenceComponent
  }
];

@NgModule({
  declarations: [
    VerifyCompetenceComponent,
    FakeUploader
    
    ],
  imports: [
    RouterModule.forChild(routes),

    MatCommonModule,
    MatIconModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

    MatRadioModule,
    MatButtonModule,
    MatDialogModule,


    FuseSharedModule
  ],
  exports: [
    VerifyCompetenceComponent,

  ],

  entryComponents: [
    FakeUploader
  ]

})

export class VerifyCompetenceModule {
}


