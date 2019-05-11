import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, App, LoadingController } from 'ionic-angular';
import { BaseProvider } from '../../../providers/base/base';
import { AppstartPage } from '../../home-module/appstart/appstart';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-1.jpg';

  constructor(
    public navCtrl: NavController,
  ) { 
  }

  // Description:  As it is a template app, we are not validating any field entered by the
  //               user.It will navigate the user to home page
  // parameters: none
  // return type : void
  login() {
    // this.base.showLoading(2000); // shows loader
    this.navCtrl.setRoot(AppstartPage)
  }

  
  //Description:  To take user to the sign up page
  // parameters: none
  // return type : void
  goToSignup() {
    this.navCtrl.push('RegisterPage');
  }

}


