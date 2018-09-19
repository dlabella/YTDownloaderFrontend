import { Injectable } from '@angular/core';
import { DownloadItem } from '../models/download-item';
import { RestClientService } from './rest-client.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadService extends RestClientService {
  
  private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(protected http: HttpClient) {
		super(http, environment.apiUrl);
  }
  public cancelDownload(downloadId:string):Observable<string>{
    const route = 'CancelDownload';
    var body = {
      "Id":downloadId,
    }

    return this.apiPostCall(route,body).pipe(
      map(response=>{
        if (response!=null){
        console.log("Cancel Download request completed");
        return response.toString();
        }
      }));
  }

  public downloadFile(url:string,path:string):Observable<string>{
    const route = 'Download';
    var body = {
      "url":url,
      "path":path,
      "mode":"DF"
    }

    return this.apiPostCall(route,body).pipe(
      map(response=>{
        if (response!=null){
        console.log("Download File request completed");
        return response.toString();
        }
      }));
  }

  public downloadAudio(url:string,path:string):Observable<string>{
    const route = 'Download';
    var body = {
      "url":url,
      "path":path,
      "mode":"DA"
    }

    if (url.toLowerCase().indexOf("/playlist")>0){
      body.mode="DAPL";
    }

    return this.apiPostCall(route,body).pipe(
      map(response=>{
        if (response!=null){
          console.log("Download Audio request completed");
          return response.toString();
        }
      }));
  }

  protected handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
  }
  
  public getActiveDownloads():Observable<DownloadItem[]> {
    const route = 'GetDownloads';
    
    return this.apiGetCall(route).pipe(
      map(response=>{
        if (response!=null){
        console.log("Download File request completed");
        return response as DownloadItem[];
        }
      }));

    // let downloadItems =  [] as DownloadItem[];
    // for (var i=0;i<10;i++){
    //   let downloadItem = new DownloadItem();
    //   downloadItem.name="Download_"+i.toString();
    //   downloadItem.id=i.toString();
    //   downloadItem.path="/tmp/temppath/file_"+i;
    //   downloadItem.percentCompleted=i+9;
    //   downloadItem.status="downloading";
    //   downloadItem.url="http://testurl"+i+".com";
    //   downloadItems.push(downloadItem);
    // }
    // downloadItems[0].status="pending";
    // downloadItems[0].percentCompleted=0;
    // downloadItems[0].isQueued=true;

    // downloadItems[1].status="pending";
    // downloadItems[1].percentCompleted=0;
    // downloadItems[1].isQueued=true;

    // return of(downloadItems);
  }
}
