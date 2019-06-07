import {Component, OnInit, ViewChild, Inject} from '@angular/core';

import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


const DATA = [
  {image: '../../../assets/images/avatars/carl.jpg', name: 'Tester Müller'},
  {image: '../../../assets/images/avatars/Abbott.jpg', name: 'Toni Tortillia'},
  {image: '../../../assets/images/avatars/joyce.jpg', name: 'Katharina -Kati- Kofler'},
  {image: '../../../assets/images/avatars/Nancy.jpg', name: 'Lisa Liesinger '},
];

const DATA_VERIFIED = [
  {competence: 'Projektmanagement', attainedDate: '-', verifiedStatus: 'ungültig', icon: 'close', color: 'red'},
  {competence: 'Zuverlässigkeit', attainedDate: '3.12.2018, 15:48:08', verifiedStatus: 'verifiziert', icon: 'check', color: 'green'},
  {competence: 'Gewissenhaftigkeit', attainedDate: '1.7.2018, 17:11:53', verifiedStatus: 'verifiziert', icon: 'check', color: 'green'},
  {competence: 'Kommunikationsfähigkeit', attainedDate: '1.1.2018, 00:00:01', verifiedStatus: 'verifiziert', icon: 'check', color: 'green'},
  {competence: 'Teamfähigkeit', attainedDate: '1.1.2018, 00:00:01', verifiedStatus: 'verifiziert', icon: 'check', color: 'green'},
];

export interface DialogData {
  name: string;
}

@Component({
  selector: 'fake-uploader',
  templateUrl: 'fake-uploader.html',
  styleUrls: ['./verify-competence.component.scss']
})
export class FakeUploader {

  uploadFinished: boolean;
  duringUpload: boolean;
  percentageValue: number;

  constructor(
    public dialogRef: MatDialogRef<FakeUploader>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.uploadFinished = false;
      this.duringUpload = false;
      this.percentageValue = 0;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickedUpload(): void {
    this.duringUpload = true;
    
    
    this.advanceTime();
    
    

    console.log("clicked upload");

  }

  advanceTime(): void {
    setTimeout( () => {
      if (this.percentageValue == 100) {
        this.duringUpload = false;
        this.uploadFinished = true;
        this.dialogRef.close(true);
      } else {
        //bla
        this.percentageValue+=1;
        this.advanceTime();
      }

    }, 20)
  }

  

}


@Component({
  selector: 'verify-competence',
  templateUrl: './verify-competence.component.html',
  styleUrls: ['./verify-competence.component.scss'],
  providers: [FakeUploader]
})
export class VerifyCompetenceComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['image', 'name', 'actions'];

  verifiedDataSource = new MatTableDataSource<any>();
  verifiedDisplayedColumns = ['competence', 'attainedDate', 'verifiedStatus'];

  uploadSuccessful: boolean;

  constructor(public dialog: MatDialog) {
    
  }
  

  ngOnInit() {
   
    this.dataSource.data = DATA;
    this.verifiedDataSource.data = DATA_VERIFIED;
    console.log("Projects");
  }

  openFakeUploader(): void {
    const dialogRef = this.dialog.open(FakeUploader, {
      width: '600px',
      height: '370px',
      data: {name: "name"}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log("result: " + true)
      this.uploadSuccessful = result;
      console.log('The dialog was closed');
      console.log("done")
    });
  }



}



