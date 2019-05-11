import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../services/http.service';
import { Global } from '../../../share/global-url';
import { BaseProvider } from '../../../providers/base/base';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  chats = [{
    imageUrl: 'assets/img/avatar/cosima-avatar.jpg',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'assets/img/avatar/cosima-avatar.jpg',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
  ,
  {
    imageUrl: 'assets/img/avatar/cosima-avatar.jpg',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];

  userList: any = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public base:BaseProvider, // contains all the basic method
    public http: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
    //API call to get all the users
    this.getAllUsers();
  }


  // Description: To open the user profile page
  // parameters: none
  // return type : void
  openUserProfile(item) {
    this.base.showConsole(item);
    this.navCtrl.push(UserProfilePage, {
      userId : item.id
    })
  }

  // Description:  To get all the user list
  // parameters: none
  // return type : void
  getAllUsers(){
    this.base.showLoading(2000);
    this.http.get(Global.BASE_GET_USERS, this.http.getHeaders()).subscribe((response) => {
      if(response.status == 200){
        this.userList = response.json()
      }else{
        this.base.showToast(Global.BASE_COMMON_DATA_ERROR);
      }
    }, (err) => {
      this.base.showToast(Global.BASE_COMMON_API_ERROR);
    })
  }

}
