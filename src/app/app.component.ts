import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login-module/login/login';
import { UserListPage } from '../pages/profile-module/user-list/user-list';
import { AppstartPage } from '../pages/home-module/appstart/appstart';
import { CreateTodoPage } from '../pages/home-module/create-todo/create-todo';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title : 'Home', component : AppstartPage, icon : 'home'},
      {title : 'View User', component : UserListPage, icon : 'people'},
      {title : 'To Do', component : CreateTodoPage, icon : 'create'},
      { title: 'Logout', component: LoginPage, icon : 'log-out' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if(page.title == 'Logout'){
      this.nav.setRoot(page.component);
    }else{
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
  }
}
