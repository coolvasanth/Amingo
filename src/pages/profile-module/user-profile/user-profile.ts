import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseProvider } from '../../../providers/base/base';
import { HttpService } from '../../../services/http.service';
import { Global } from '../../../share/global-url';
import { UserPostsPage } from '../user-posts/user-posts';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userDetails:any = [];
  userId:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpService,
     public base: BaseProvider) {
      this.userId = this.navParams.get("userId");
      this.base.showConsole("user id is " + this.userId)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getUserDetails(); 
  }

  // Description:  To get the user details from the userId
  // parameters: none
  // return type : void
  getUserDetails(){
    this.base.showLoading(2000);
    this.http.get(Global.BASE_GET_USERS + "/" + this.userId , this.http.getHeaders()).subscribe((response) => {
      if(response.status == 200){
        this.userDetails = response.json()
        // this.userDetails.profileImage = "https://i.pravatar.cc/150?img=" + (this.userId - 1)
        this.userDetails.profileImage = "https://i.pravatar.cc/150?img=" + this.userId 
        this.userDetails.coverImage = "https://i.pravatar.cc/300"
        this.userDetails.catchPhrase = this.userDetails.company.catchPhrase
        this.userDetails.location = this.userDetails.address.street + ", " + this.userDetails.address.city  
      }else{
        this.base.showToast(Global.BASE_COMMON_DATA_ERROR);
      }
    }, (err) => {
      this.base.showToast(Global.BASE_COMMON_API_ERROR);
    })
  }

  // Description:  To open all the posts of the user
  // parameters: none
  // return type : void
  openUserPosts(){
    this.navCtrl.push(UserPostsPage, {
      userId : this.userId,
      userDetails:this.userDetails
    })
  }

}
