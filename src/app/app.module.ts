import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DownloadListComponent } from './components/download-list/download-list.component';
import { DownloadService } from 'src/app/services/download.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloadCardComponent } from './components/download-card/download-card.component';
import { ConfigDialogComponent } from './components/config-dialog/config-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DownloadListComponent,
    DownloadCardComponent,
    ConfigDialogComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ DownloadService],
  bootstrap: [AppComponent],
  entryComponents:[
    ConfigDialogComponent
  ]
})
export class AppModule { }
