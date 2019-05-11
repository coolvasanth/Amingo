import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseProvider } from '../../../providers/base/base';
import { HttpService } from '../../../services/http.service';
import { Global } from '../../../share/global-url';
import { PostDetailsPage } from '../../home-module/post-details/post-details';
/**
 * Generated class for the UserPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-posts',
  templateUrl: 'user-posts.html',
})
export class UserPostsPage {
  userId:any;
  userDetails:any;
  userPosts: any = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpService,
     public base: BaseProvider) {
       this.userId = this.navParams.get("userId")
       this.userDetails = this.navParams.get("userDetails")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPostsPage');
    this.getUserDetails();
  }

   // To get the user details from the User Id passed from different pages
   getUserDetails(){
    this.base.showLoading(2000);
    this.http.get(Global.BASE_GET_USER_POSTS  + this.userId, this.http.getHeaders()).subscribe((response) => {
      if(response.status == 200){
        this.userPosts = response.json();
      }else{
        this.base.showToast(Global.BASE_COMMON_DATA_ERROR);
      }
    }, (err) => {
      this.base.showToast(Global.BASE_COMMON_API_ERROR);
    })
  }

  openPostDetails(item){
    this.navCtrl.push(PostDetailsPage, {
      postDetails: item
    });
  }
}
