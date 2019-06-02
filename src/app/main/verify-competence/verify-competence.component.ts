import {Component, OnInit, ViewChild} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatTableDataSource } from '@angular/material';


const DATA = [
  {image: '../../../assets/images/avatars/carl.jpg', name: 'Tester Müller'},
  {image: '../../../assets/images/avatars/Abbott.jpg', name: 'Toni Tortillia'},
  {image: '../../../assets/images/avatars/joyce.jpg', name: 'Katharina -Kati- Kofler'},
  {image: '../../../assets/images/avatars/Nancy.jpg', name: 'Lisa Liesinger '},
];

@Component({
  selector: 'verify-competence',
  templateUrl: './verify-competence.component.html',
  styleUrls: ['./verify-competence.component.scss']
})
export class VerifyCompetenceComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['image', 'name', 'actions'];

  constructor() {
    
  }
  

  ngOnInit() {
   
    this.dataSource.data = DATA;
    console.log("Projects");
  }

}
