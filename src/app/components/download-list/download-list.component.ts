import { Component, OnInit, OnDestroy } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { catchError } from 'rxjs/operators';
import { DownloadItem } from '../../models/download-item';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.css']
})
export class DownloadListComponent implements OnInit, OnDestroy {
  
  working: boolean;
  downloads: DownloadItem[];
  private activeDownloads: Subscription;
  
  constructor(private downloadService: DownloadService) { }
  
  ngOnInit() {
    this.getActiveDownloads();
    this.activeDownloads = interval(5000).subscribe(()=>{
      this.getActiveDownloads()
    });
  }
  
  ngOnDestroy(): void {
    if (this.activeDownloads!=null){
      this.activeDownloads.unsubscribe();
    }
  }
  private getActiveDownloads(): void {
    if (this.working) return;
    this.working = true;

    this.downloadService.getActiveDownloads().pipe(
      catchError(err => {
        this.working = false;
        return Promise.reject(err.message || err);
      }))
      .subscribe(
        result => {
          this.working = false;
          this.downloads = result;
          if (result.length>0){
            console.log("Items downloading: "+result.length);
          }
      });
  };
}
