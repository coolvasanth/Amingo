import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppstartPage } from '../../home-module/appstart/appstart';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public backgroundImage = 'assets/img/background/background-1.jpg';

  constructor(
    public navCtrl: NavController,
  ) { }


  //Description:  AS it is sample app, we are not validating values, entered by 
  //              the user. Below function will take the user to home page
  // parameters: none
  // return type : void
  register() {
    this.navCtrl.setRoot(AppstartPage)
  }


}
