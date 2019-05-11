import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppstartPage } from './appstart';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    AppstartPage
    
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(AppstartPage),
  ],
})
export class AppstartPageModule {}
