import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { BaseProvider } from "../../../providers/base/base";
import { UserProfilePage } from "../../profile-module/user-profile/user-profile";
import { PostDetailsPage } from "../post-details/post-details";
import { HttpService } from "../../../services/http.service";
import { Global } from "../../../share/global-url";

/**
 * Generated class for the AppstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-appstart",
  templateUrl: "appstart.html"
})
export class AppstartPage {
  allPosts = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public base: BaseProvider,
    public http: HttpService
  ) {}

  ionViewDidLoad() {
    this.getUserDetails();
  }

  //Description:  To get the user details from the User Id passed from different pages
  // parameters: none
  // return type : void
  getUserDetails() {
    this.base.showLoading(2000);
    this.http.get(Global.BASE_GET_ALL_POSTS, this.http.getHeaders()).subscribe(
      response => {
        if (response.status == 200) {
          this.allPosts = response.json();
          if (this.allPosts.length > 30) {
            this.allPosts.length = 30;
          }
        } else {
          this.base.showToast(Global.BASE_COMMON_DATA_ERROR);
        }
      },
      err => {
        this.base.showToast(Global.BASE_COMMON_API_ERROR);
      }
    );
  }

  //Description:  To open the user profile page
  // parameters: none
  // return type : void
  openUserProfile(item) {
    this.navCtrl.push(UserProfilePage, {
      userId: item.userId
    });
  }

  //Description: Just post title will be shown on this page, for further details 
  //            user needs to go to details page
  // parameters: none
  // return type : void
  openPostDetails(item) {
    this.navCtrl.push(PostDetailsPage, {
      postDetails: item
    });
  }
}
