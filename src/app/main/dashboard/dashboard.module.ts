import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {DashboardComponent} from './dashboard.component';
import { MatIconModule } from '@angular/material';
import { FuseWidgetModule } from '@fuse/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes = [
  {
      path     : 'dashboard',
      component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    BrowserAnimationsModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {
}
