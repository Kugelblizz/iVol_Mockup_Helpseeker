import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatTableDataSource } from '@angular/material';
import { TaskTemplate } from "../_model/models";


const insertedTaskName = '[set name here]';

const DATA: TaskTemplate[] = [
  //inserted task
  {id: 'letztes', name: insertedTaskName, creator: 'Walter Verwalter', modifiedOn: new Date(), status: 'Bereit zum Veröffentlichen'},

  {id: '1', name: 'Task 1', creator: 'Walter Verwalter', modifiedOn: new Date(1559033133000), status: 'Bereit zum Veröffentlichen', description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Liese Leiter', modifiedOn: new Date(1558820054000), status: 'Veröffentlicht', description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558788901000), status: 'Veröffentlicht' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558513352000), status: 'Abgelaufen' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  // {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558314179000), status: 'Beendet' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},

];


@Component({
  selector: 'tasks-finished',
  templateUrl: './tasks-finished.component.html',
  styleUrls: ['./tasks-finished.component.scss']
})
export class TasksFinishedComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<TaskTemplate>();
  displayedColumns = ['name', 'creator', 'modifiedOn', 'status', 'actions'];
  insertedTaskName = insertedTaskName;

  fadedIn: boolean;


  constructor() {
    this.dataSource.data = DATA;
  }

  ngOnInit() {
   
    this.fadedIn = true;


    console.log("Tasks");

    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fadedIn = false;
    }, 10000);
  }

  

}
