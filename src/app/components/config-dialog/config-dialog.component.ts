import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  FilesRootFolder: string;
  AudioRootFolder: string;
  Description:string;
}

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.css']
})
export class ConfigDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  Description:string;

  ngOnInit() {
    this.Description="Dialog";
  }
  
  cancel():void{
    this.dialogRef.close();
  }

  save():void{
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
