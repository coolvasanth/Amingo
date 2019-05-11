import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BaseProvider } from "../../../providers/base/base";
import { UserProfilePage } from "../../profile-module/user-profile/user-profile";
import { HttpService } from "../../../services/http.service";
import { Global } from "../../../share/global-url";
/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-post-details",
  templateUrl: "post-details.html"
})
export class PostDetailsPage {
  postId: any;
  postDetails: any;
  commentList: any = [];
  userId: any;
  userDetails: any = [];
  userName: any;
  userWebsite: any;
  postLikes: any = 0;
  showComments: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public base: BaseProvider,
    public http: HttpService
  ) {
    this.postDetails = this.navParams.get("postDetails");
    this.postId = this.postDetails.id;
    this.userId = this.postDetails.userId;
    console.log(this.postDetails);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PostDetailsPage");

    this.getPostComments();
    this.getUserDetails();
  }

  //Description:  To get all the comments for the given post
  // parameters: none
  // return type : void
  getPostComments() {
    this.base.showLoading(2000);
    this.http
      .get(
        Global.BASE_GET_COMMENTS_OF_POST + this.postId,
        this.http.getHeaders()
      )
      .subscribe(
        response => {
          if (response.status == 200) {
            this.commentList = response.json();
            if (this.commentList.length > 30) {
              this.commentList.length = 30;
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

  //Description:  To get the user details of who has posted
  // parameters: none
  // return type : void
  getUserDetails() {
    this.base.showLoading(2000);
    this.http
      .get(Global.BASE_GET_USERS + "/" + this.userId, this.http.getHeaders())
      .subscribe(
        response => {
          if (response.status == 200) {
            this.userDetails = response.json();
            this.userName = this.userDetails.name;
            this.userWebsite = this.userDetails.website;
          } else {
            this.base.showToast(Global.BASE_COMMON_DATA_ERROR);
          }
        },
        err => {
          this.base.showToast(Global.BASE_COMMON_API_ERROR);
        }
      );
  }

  //Description:  To show or hide the comment section
  // parameters: none
  // return type : void
  comment(post) {
    // this.base.showToast('Comments clicked');
    if (this.showComments == true) {
      this.showComments = false;
    } else {
      this.showComments = true;
    }
  }

  // Description:  To like the post
  // parameters: none
  // return type : void
  like(post) {
    // this.base.showToast('Like clicked');
    this.postLikes = this.postLikes + 1;
  }

  // Description:  To open the user profiles
  // parameters: none
  // return type : void
  openUserProfile() {
    this.navCtrl.push(UserProfilePage, {
      userId: this.userId
    });
  }
}
