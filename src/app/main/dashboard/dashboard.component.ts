import {Component, OnInit, ViewChild} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { Chart } from "chart.js";
import { MatTableDataSource } from '@angular/material';
 

const DATA = [
  {engAsset: 'Project Management', assetType: 'Competence', issuer: 'ÖRK', date: '-', status: 'close'},
  {engAsset: 'Yearly Feedback', assetType: 'Feedback', issuer: 'ÖRK', date: '3.12.2018',  status: 'check'},
  {engAsset: 'Diligence', assetType: 'Competence', issuer: 'ÖRK', date: '1.7.2018',  status: 'check'},
  {engAsset: 'Communication Skills', assetType: 'Competence', issuer: 'ÖRK', date: '1.1.2018', status: 'check'},
  {engAsset: 'Teamwork', assetType: 'Competence', issuer: 'ÖRK', date: '1.1.2018', status: 'check'},
];

const DATA_TASKS = [
  {label: 'Task 1', issuer: 'ÖRK', date: new Date(1559033133000), status: 'Bereit zum Veröffentlichen'},
  {label: 'Task 2', issuer: 'FF Krems', date: new Date(1558820054000), status: 'Veröffentlicht'},
  {label: 'Task 2', issuer: 'FF Krems', date: new Date(1558788901000), status: 'Veröffentlicht'},
  {label: 'Task 2', issuer: 'ÖRK', date: new Date(1558513352000), status: 'Abgelaufen'},
  {label: 'Task 2', issuer: 'ÖRK', date: new Date(1558314179000), status: 'Beendet'}


];


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('myChart1') private chartRef1;
  chart1: any;

  @ViewChild('myChart2') private chartRef2;
  chart2: any;

  @ViewChild('myChart3') private chartRef3;
  chart3: any;
  chart3meta: any;

  widget0: any;
  widget1: any; 
  widget2: any;
  widget3: any;


  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['engAsset', 'assetType', 'issuer', 'date', 'status'];

  dataSourceTasks = new MatTableDataSource<any>();
  displayedColumnsTasks = ['label', 'issuer', 'date', 'status', 'actions'];


  ngOnInit() {


    this.dataSource.data = DATA;
    this.dataSourceTasks.data = DATA_TASKS;

    this.chart1 = new Chart(this.chartRef1.nativeElement, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: false,
    }
  });

  this.chart2 = new Chart(this.chartRef2.nativeElement, {

  type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: false,
    }
  });

  this.chart3 = new Chart(this.chartRef3.nativeElement, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Visits',
        data: [432, 428, 327, 363, 456, 267, 231]
      }],
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      colors: [
        {
          borderColor: '#f44336',
          backgroundColor: '#f44336'
        }
      ],
    },
    options: {
      responsive: false,
      spanGaps: false,
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 24,
          left: 16,
          right: 16,
          bottom: 16
        }
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              min: 150,
              max: 500
            }
          }
        ]
      }
    }
  });

  this.chart3meta = {
    visits: {
      value: 882,
      ofTarget: -9
    },
  };


  this.widget0 = {
    'title' : 'Tasks finished (this month)',
    'data'  : {
        'label': 'TASKS',
        'count': 50,
        'extra': {
            'label': 'Yesterday',
            'count': 47
        }
    },
    'detail': 'You can show some detailed information about this widget in here.'
  };

  this.widget1 = {
    'title' : 'Tasks still open',
    'data'  : {
        'label': 'TASKS',
        'count': 22,
        'extra': {
            'label': 'Yesterday',
            'count': 25
        }
    },
    'detail': 'You can show some detailed information about this widget in here.'
  };

  this.widget2 = {
    'title' : 'Your open Tasks at ÖRK',
    'data'  : {
        'label': 'TASKS',
        'count': 12,
        'extra': {
            'label': 'Yesterday',
            'count': 14
        }
    },
    'detail': 'You can show some detailed information about this widget in here.'
  };

  this.widget3 = {
    'title' : 'Your open Tasks at FF Krems',
    'data'  : {
        'label': 'TASKS',
        'count': 10,
        'extra': {
            'label': 'Yesterday',
            'count': 11
        }
    },
    'detail': 'You can show some detailed information about this widget in here.'
  };

    console.log(this.chart3);
    console.log(this.widget1);
    console.log("Dashboard");
  }

}
