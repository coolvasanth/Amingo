import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PageModule } from '../pages/page.module';
import { BaseProvider } from '../providers/base/base';
import { HttpService } from '../services/http.service';

import { HttpModule } from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageViewerModule,
    PageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    HttpService,
    SplashScreen,
    BaseProvider, // all the basic usage components are written here. Ex: showing toast, loader etc
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
