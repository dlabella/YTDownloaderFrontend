import { Component, OnInit } from '@angular/core';
import { DownloadService } from './services/download.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigDialogComponent } from './components/config-dialog/config-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'YTDownloader';

  constructor(
    private downloadService:DownloadService,
    private dialog: MatDialog
    ) { }
  
  ngOnInit(): void {
  }

  onFileDownloadClick(clickEvent:any, url:string){
    clickEvent.preventDefault();
    this.downloadService.downloadFile(url,"").subscribe(result=>{
      alert('File Download enqueued');
      console.log(result);
    });
  }

  onAudioDownloadClick(clickEvent:any, url:string){
    clickEvent.preventDefault();
    this.downloadService.downloadAudio(url,"").subscribe(result=>{
      alert('Audio Download enqueued');
      console.log(result);
    });
  }

  onNavBarEvent(itemClicked:string){
    const dialogRef = this.dialog.open(ConfigDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
