import {Component, OnInit, ViewChild} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { TaskForm } from '../_model/models';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';





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

  constructor(
    private _formBuilder: FormBuilder
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
  }

  id: string;
  name: string;
  description: string;
  priority: string;
  project: string;

  startDate: Date;
  deadline: Date;
  
  competence: string;

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
     * Finish the horizontal stepper
     */
    finishHorizontalStepper(): void
    {
        alert('You have finished the horizontal stepper!');
    }

    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void
    {
        alert('You have finished the vertical stepper!');
    }


    getCurrentDateString(): string {
      return new Date().toLocaleDateString();
    }
}
