import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';


const DATA = [
  { label: 'Aquire Teamwork Competence', pre: 'Finish Tasks with at least 3 colleagues (5x)', post: 'Received Competence "Teamwork"'},
  { label: 'Receive "Perfectionist" Badge', pre: 'Receive a rating of 5 Stars (20x)', post: 'Received Badge "Perfectionist"'},
  { label: 'Aquire Dependability Competence', pre: 'Receive a 5 Star Rating or Kudos (30x)', post: 'Received Competence "Dependability"'},
  { label: '1 Year Anniversary', pre: 'Registered for 1 year', post: 'Received Badge "Perseverance"'},
];


@Component({
  selector: 'config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['label', 'pre', 'post'];

  ngOnInit() {
   
    this.dataSource.data = DATA;
    console.log("config page");
  }

}
