import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';


const DATA = [
  { label: 'Aquire Teamwork Competence', pre: 'Finish Tasks with at least 3 colleagues (5x)', post: 'Received Competence "Teamwork"'},
  { label: 'Receive "Perfectionist" Badge', pre: 'Receive a rating of 5 Stars (20x)', post: 'Received Badge "Perfectionist"'},
  { label: 'Aquire Dependability Competence', pre: 'Receive a 5 Star Rating or Kudos (30x)', post: 'Received Competence "Dependability"'},
  { label: '1 Year Anniversary', pre: 'Registered for 1 year', post: 'Received Badge "Perseverance"'},
];


@Component({
  selector: 'confirm-task-ff1',
  templateUrl: './confirm-task.component.html',
  styleUrls: ['./confirm-task.component.scss']
})
export class ConfirmFFTaskComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['label', 'pre', 'post'];
  feedbackType: any;
  showFeedbackSection: boolean;
  starrated: boolean;
  confirmed_done: boolean;

  ngOnInit() {
   
    this.dataSource.data = DATA;
    this.showFeedbackSection = false;
    this.starrated = false;
    this.confirmed_done = false
    console.log("config page");
  }

  doCountdown() {
    setTimeout(() => {
      this.confirmed_done = true;
    }, 1500);
  }

}
