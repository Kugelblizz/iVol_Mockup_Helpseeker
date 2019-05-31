import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';




// const routes: Route[] = [
//     // {
//     //     path: 'main/dashboard',
//     //     loadChildren: './dashboard/dashboard.module#DashboardModule'
//     // },


// ]

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [

        RouterModule,
        FuseSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule
{
}
