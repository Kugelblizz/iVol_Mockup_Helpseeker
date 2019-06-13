import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '../../../@fuse/shared.module';

import {ConfigPageComponent} from './config-page.component';
import { MatCommonModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatIconModule } from '@angular/material';



const routes = [
  {
      path     : 'config',
      component: ConfigPageComponent
  }
];

@NgModule({
  declarations: [
    ConfigPageComponent,
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

    FuseSharedModule
  ],
  exports: [
    ConfigPageComponent
  ]
})

export class ConfigPageModule {
}
