import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA, MatDrawerContainer } from '@angular/material';
import { ConfigDialogComponent } from 'src/app/components/config-dialog/config-dialog.component';
import { CoreModule } from 'src/app/core/core.module';
import { settings } from 'cluster';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() settings = new EventEmitter<string>();

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  onSettingsClick(event:any){
    this.settings.emit("settings");
  }

}
