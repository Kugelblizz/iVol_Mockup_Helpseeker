import {Component, OnInit, ViewChild} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatTableDataSource } from '@angular/material';
import { TaskTemplate } from "../_model/models";

const DATA: TaskTemplate[] = [
  {id: '1', name: 'Task 1', creator: 'Walter Verwalter', modifiedOn: new Date(1559033133000), status: 'Bereit zum Veröffentlichen', description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Liese Leiter', modifiedOn: new Date(1558820054000), status: 'Veröffentlicht', description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558788901000), status: 'Veröffentlicht' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558513352000), status: 'Abgelaufen' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},
  {id: '2', name: 'Task 2', creator: 'Walter Verwalter', modifiedOn: new Date(1558314179000), status: 'Beendet' ,description: 'DO SOMETHING', startDate: new Date(), endDate: new Date(), acquirableCompetences: [], requiredCompetences: []},


];


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  dataSource = new MatTableDataSource<TaskTemplate>();
  displayedColumns = ['name', 'creator', 'modifiedOn', 'status', 'actions'];

  constructor() {
    this.dataSource.data = DATA;
  }

  ngOnInit() {
   
    console.log("Tasks");
  }

}
