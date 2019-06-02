import {Component, OnInit} from '@angular/core';

import { TaskForm } from '../_model/models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatTableDataSource } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { Router } from '@angular/router';


const DATA = [
  {image: '../../../assets/images/avatars/carl.jpg', name: 'Tester Müller'},
  {image: '../../../assets/images/avatars/Abbott.jpg', name: 'Toni Tortillia'},
  {image: '../../../assets/images/avatars/joyce.jpg', name: 'Katharina -Kati- Kofler'},
  {image: '../../../assets/images/avatars/Nancy.jpg', name: 'Lisa Liesinger '},
];

const DATA_2 = [
  {competence: 'Kompetenz 1'},
  {competence: 'Kompetenz 2'},
  {competence: 'Kompetenz 3'},
  {competence: 'Kompetenz 4'}
]


@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'de'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AddTaskComponent implements OnInit {

  model: TaskForm;
  form: FormGroup;
  formErrors: any;

  displayFirstCompetenceStep: boolean;
  displayAbleitungStep: boolean;
  displayAbleitungFinishedStep: boolean;

  displayFinishedLoadingCircle: boolean;

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['image', 'name', 'actions'];


  dataSourceCompetences = new MatTableDataSource<any>();
  displayedColumnsCompetences = ['competenceName', 'actions']


  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
)
{


    // Horizontal Stepper form error
    this.formErrors = {
        name: {},
        description : {},
        priority : {},
        project : {},
        startDate : {},
        deadline : {},

    };

    this.dataSource.data = DATA;
    this.dataSourceCompetences.data = DATA_2;

    this.displayFirstCompetenceStep = true;
    this.displayAbleitungStep = false;
    this.displayAbleitungFinishedStep = false;

    this.displayFinishedLoadingCircle = false;




  }

  ngOnInit() {
      this.form = this._formBuilder.group({
        name: ['', Validators.required],
        description : [''],
        priority: ['', Validators.required],
        project: ['', Validators.required],
        startDate: [new Date() , Validators.required],
        deadline: [''],
    });



    console.log("add-task");
  }


    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void {

      this.displayFinishedLoadingCircle = true;
    
      setTimeout(() => {
        this.router.navigateByUrl('/tasksfinished');
      }, 2000);
        

    
     
    }


    getCurrentDateString(): string {
      return new Date().toLocaleDateString();
    }


    ableiten() {
      this.displayFirstCompetenceStep = false;
      this.displayAbleitungStep = true;

      setTimeout(() => {
        this.displayAbleitungStep = false;
        this.displayAbleitungFinishedStep = true;        

      }, 2500);

      //Stopped here

    }

    resetAbleitungStates() {
      this.displayAbleitungFinishedStep = false;
      this.displayAbleitungStep = false;
      this.displayFirstCompetenceStep = true;
    }

  }
