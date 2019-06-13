import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';


const DATA = [
  {engAsset: 'Project Management', assetType: 'Competence', issuer: 'ÖRK', date: '-', status: 'close'},
  {engAsset: 'Yearly Feedback', assetType: 'Feedback', issuer: 'ÖRK', date: '3.12.2018',  status: 'check'},
  {engAsset: 'Diligence', assetType: 'Competence', issuer: 'ÖRK', date: '1.7.2018',  status: 'check'},
  {engAsset: 'Communication Skills', assetType: 'Competence', issuer: 'ÖRK', date: '1.1.2018', status: 'check'},
  {engAsset: 'Teamwork', assetType: 'Competence', issuer: 'ÖRK', date: '1.1.2018', status: 'check'},
];


@Component({
  selector: 'recruit-view',
  templateUrl: './recruit-view.component.html',
  styleUrls: ['./recruit-view.component.scss']
})
export class RecruitViewComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['engAsset', 'assetType', 'issuer', 'date', 'status'];

  ngOnInit() {
   
    this.dataSource.data = DATA;
    console.log("config page");
  }

}
