import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { DashboardModule } from 'app/main/dashboard/dashboard.module';
import { ProjectsModule } from 'app/main/projects/projects.module';
import { TasksModule } from './main/tasks/tasks.module';
import { AddTaskModule } from './main/add-task/add-task.module';
import { TasksFinishedModule } from './main/tasks-finished/tasks-finished.module';
import { VerifyCompetenceModule } from './main/verify-competence/verify-competence.module';
import { ConfigPageModule } from "./main/config-page/config-page.module";
import { RecruitViewModule } from './main/recruit-view/recruit-view.module';


const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'dashboard'

        
    },

   
];

const children: Routes = [
    {
        path: 'sample',
        loadChildren: './main/sample/sample.module#SampleModule',
    },

    {
        path: 'dashboard',
        loadChildren: './main/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'projects',
        loadChildren: './main/projects/projects.module#ProjectsModule',
    },
    {
        path: 'tasks',
        loadChildren: './main/tasks/tasks.module#TasksModule',
    },
    {
        path: 'tasksfinished',
        loadChildren: './main/tasks-finished/tasks-finished.module#TasksFinishedModule',
    },
    {
        path: 'task/add',
        loadChildren: './main/add-task/add-task.module#AddTaskModule',
    },
    {
        path: 'verifycompetence',
        loadChildren: './main/verify-competence/verify-competence.module#VerifyCompetenceModule',
    },
    {
        path: 'config',
        loadChildren: './main/config-page/config-page.module#ConfigPageModule',
    },
    {
        path: 'recruit',
        loadChildren: './main/recruit-view/recruit-view.module#RecruitViewModule',
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        RouterModule.forChild(children),

        TranslateModule.forRoot(),


        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        DashboardModule,
        ProjectsModule,
        TasksModule,
        AddTaskModule,
        TasksFinishedModule,
        VerifyCompetenceModule,
        ConfigPageModule,
        RecruitViewModule,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
