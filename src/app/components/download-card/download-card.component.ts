import { Component, OnInit, Input } from '@angular/core';
import { DownloadItem } from '../../models/download-item';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.css']
})
export class DownloadCardComponent implements OnInit {
  @Input() download:DownloadItem;
  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

  cancelDownload(){
    this.downloadService.cancelDownload(this.download.id).subscribe(()=>{
      alert("Download "+this.download.id+ " cancelled");
    })
  }

}
