webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_module_user_profile_user_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_global_url__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostDetailsPage = /** @class */ (function () {
    function PostDetailsPage(navCtrl, navParams, base, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base = base;
        this.http = http;
        this.commentList = [];
        this.userDetails = [];
        this.postLikes = 0;
        this.showComments = true;
        this.postDetails = this.navParams.get("postDetails");
        this.postId = this.postDetails.id;
        this.userId = this.postDetails.userId;
        console.log(this.postDetails);
    }
    PostDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PostDetailsPage");
        this.getPostComments();
        this.getUserDetails();
    };
    //Description:  To get all the comments for the given post
    // parameters: none
    // return type : void
    PostDetailsPage.prototype.getPostComments = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_GET_COMMENTS_OF_POST + this.postId, this.http.getHeaders())
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.commentList = response.json();
                if (_this.commentList.length > 30) {
                    _this.commentList.length = 30;
                }
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    //Description:  To get the user details of who has posted
    // parameters: none
    // return type : void
    PostDetailsPage.prototype.getUserDetails = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_GET_USERS + "/" + this.userId, this.http.getHeaders())
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.userDetails = response.json();
                _this.userName = _this.userDetails.name;
                _this.userWebsite = _this.userDetails.website;
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_5__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    //Description:  To show or hide the comment section
    // parameters: none
    // return type : void
    PostDetailsPage.prototype.comment = function (post) {
        // this.base.showToast('Comments clicked');
        if (this.showComments == true) {
            this.showComments = false;
        }
        else {
            this.showComments = true;
        }
    };
    // Description:  To like the post
    // parameters: none
    // return type : void
    PostDetailsPage.prototype.like = function (post) {
        // this.base.showToast('Like clicked');
        this.postLikes = this.postLikes + 1;
    };
    // Description:  To open the user profiles
    // parameters: none
    // return type : void
    PostDetailsPage.prototype.openUserProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_module_user_profile_user_profile__["a" /* UserProfilePage */], {
            userId: this.userId
        });
    };
    PostDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-post-details",template:/*ion-inline-start:"E:\a\amingo\src\pages\home-module\post-details\post-details.html"*/'<!--\n  Generated template for the PostDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=maincolor>\n    <ion-title>Post Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id="posts">\n        <ion-card >\n          <ion-item (tap)="openUserProfile()">\n            <ion-avatar item-start>\n              <img src="https://i.pravatar.cc/150?img={{userId}}">\n            </ion-avatar>\n            <h2 class="sticky">{{userName}}</h2>\n            <p>{{userWebsite}}</p>\n          </ion-item>\n          <img src="https://i.pravatar.cc/300" imageViewer>\n          <ion-card-content>\n              <span><b>{{postDetails.title}}</b></span>\n            <p>{{postDetails.body}}</p>\n          </ion-card-content>\n          <ion-row>\n            <ion-col>\n              <button ion-button color="purple" clear small icon-left (click)="like(post)">\n                  <ion-icon name=\'thumbs-up\'></ion-icon>\n                  {{postLikes}} Likes\n                </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button color="purple" clear small icon-left (click)="comment(post)">\n                  <ion-icon name=\'text\'></ion-icon>\n                  {{commentList.length}} Comments\n                </button>\n            </ion-col>\n            <ion-col align-self-center text-center>\n              <p>\n                3 min\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n\n\n\n      <div *ngIf="showComments">\n          <ion-list>\n              <ion-item *ngFor="let post of commentList; let i = index;" >\n                <ion-avatar item-start>\n                  <img src="https://i.pravatar.cc/150?img={{post.id % 60}}" >\n                </ion-avatar>\n                <!-- <h2>{{user.name}}</h2> -->\n                <p>{{post.body}}</p>\n              </ion-item>\n            </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\home-module\post-details\post-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_base__["a" /* BaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */]])
    ], PostDetailsPage);
    return PostDetailsPage;
}());

//# sourceMappingURL=post-details.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-module/appstart/appstart.module": [
		185
	],
	"../pages/home-module/create-todo/create-todo.module": [
		209
	],
	"../pages/home-module/post-details/post-details.module": [
		211
	],
	"../pages/login-module/login/login.module": [
		212
	],
	"../pages/login-module/register/register.module": [
		425,
		0
	],
	"../pages/profile-module/user-list/user-list.module": [
		214
	],
	"../pages/profile-module/user-posts/user-posts.module": [
		216
	],
	"../pages/profile-module/user-profile/user-profile.module": [
		217
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppstartPageModule", function() { return AppstartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appstart__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppstartPageModule = /** @class */ (function () {
    function AppstartPageModule() {
    }
    AppstartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appstart__["a" /* AppstartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appstart__["a" /* AppstartPage */]),
            ],
        })
    ], AppstartPageModule);
    return AppstartPageModule;
}());

//# sourceMappingURL=appstart.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_global_url__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_module_post_details_post_details__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPostsPage = /** @class */ (function () {
    function UserPostsPage(navCtrl, navParams, http, base) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.base = base;
        this.userPosts = [];
        this.userId = this.navParams.get("userId");
        this.userDetails = this.navParams.get("userDetails");
    }
    UserPostsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPostsPage');
        this.getUserDetails();
    };
    // To get the user details from the User Id passed from different pages
    UserPostsPage.prototype.getUserDetails = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_GET_USER_POSTS + this.userId, this.http.getHeaders()).subscribe(function (response) {
            if (response.status == 200) {
                _this.userPosts = response.json();
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    UserPostsPage.prototype.openPostDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_module_post_details_post_details__["a" /* PostDetailsPage */], {
            postDetails: item
        });
    };
    UserPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-posts',template:/*ion-inline-start:"E:\a\amingo\src\pages\profile-module\user-posts\user-posts.html"*/'<!--\n  Generated template for the UserPostsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="maincolor">\n    <ion-title>{{userDetails.name}}\'s Posts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of userPosts; let i = index;">\n      \n      <div >\n          <img src="https://i.pravatar.cc/150?img={{i + userId + 30}}" imageViewer> \n          <div (tap)="openPostDetails(post)" *ngIf="post.title" class="post-description">\n            <small>{{ post.title }}</small>\n          </div>\n      </div>\n\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\profile-module\user-posts\user-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_base__["a" /* BaseProvider */]])
    ], UserPostsPage);
    return UserPostsPage;
}());

//# sourceMappingURL=user-posts.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoPageModule", function() { return CreateTodoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_todo__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTodoPageModule = /** @class */ (function () {
    function CreateTodoPageModule() {
    }
    CreateTodoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_todo__["a" /* CreateTodoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_todo__["a" /* CreateTodoPage */]),
            ],
        })
    ], CreateTodoPageModule);
    return CreateTodoPageModule;
}());

//# sourceMappingURL=create-todo.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_base__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTodoPage = /** @class */ (function () {
    function CreateTodoPage(navCtrl, navParams, base) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base = base;
        this.todos = [];
    }
    CreateTodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTodoPage');
    };
    // Description:  To add the todo item to the list
    // parameters: none
    // return type : void
    CreateTodoPage.prototype.add = function () {
        console.log(this.todo);
        debugger;
        if (this.todo == undefined || this.todo == null || this.todo == "") {
            this.base.showToast("Please enter some item");
        }
        else {
            this.todos.push(this.todo);
            this.todo = "";
        }
    };
    //Description: To delete an item from the list
    // parameters: none
    // return type : void
    CreateTodoPage.prototype.delete = function (item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    CreateTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-todo',template:/*ion-inline-start:"E:\a\amingo\src\pages\home-module\create-todo\create-todo.html"*/'<!--\n  Generated template for the CreateTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="maincolor">\n        <button ion-button menuToggle>\n            <ion-icon name="options"></ion-icon>\n          </button>\n      <ion-title>Create To do</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-input [(ngModel)]="todo" placeholder="Add items here" type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button full (click)="add()">ADD</button>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let t of todos; let i = index;">\n            <ion-item>\n              {{i+1}}. &nbsp; {{t}}\n            </ion-item>\n\n            <ion-item-options side="right">\n                <button ion-button color="danger" (click)="delete(t)">\n                    <ion-icon name="trash"></ion-icon> Delete\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\home-module\create-todo\create-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_base__["a" /* BaseProvider */]])
    ], CreateTodoPage);
    return CreateTodoPage;
}());

//# sourceMappingURL=create-todo.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_details__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostDetailsPageModule = /** @class */ (function () {
    function PostDetailsPageModule() {
    }
    PostDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_details__["a" /* PostDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_details__["a" /* PostDetailsPage */]),
            ],
        })
    ], PostDetailsPageModule);
    return PostDetailsPageModule;
}());

//# sourceMappingURL=post-details.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_module_appstart_appstart__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.backgroundImage = 'assets/img/background/background-1.jpg';
    }
    // Description:  As it is a template app, we are not validating any field entered by the
    //               user.It will navigate the user to home page
    // parameters: none
    // return type : void
    LoginPage.prototype.login = function () {
        // this.base.showLoading(2000); // shows loader
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_module_appstart_appstart__["a" /* AppstartPage */]);
    };
    //Description:  To take user to the sign up page
    // parameters: none
    // return type : void
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\a\amingo\src\pages\login-module\login\login.html"*/'<ion-content padding class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <div padding>\n    <ion-row>\n      <ion-col>\n        <img class="logo" src="assets/img/logo/logo.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list inset class="no-border">\n          <ion-item>\n            <ion-label>Username</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type="password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button class="login-button" (click)="login()">Login</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div (click)="goToSignup()">\n          <span>Or create a new account.</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\a\amingo\src\pages\login-module\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageModule", function() { return UserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserListPageModule = /** @class */ (function () {
    function UserListPageModule() {
    }
    UserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */]),
            ],
        })
    ], UserListPageModule);
    return UserListPageModule;
}());

//# sourceMappingURL=user-list.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_global_url__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserListPage = /** @class */ (function () {
    function UserListPage(navCtrl, navParams, base, // contains all the basic method
        http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base = base;
        this.http = http;
        this.chats = [{
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
            },
            {
                imageUrl: 'assets/img/avatar/cosima-avatar.jpg',
                title: 'Sarah Mcconnor',
                lastMessage: 'You still ow me that pizza.',
                timestamp: new Date()
            }];
        this.userList = [];
    }
    UserListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserListPage');
        //API call to get all the users
        this.getAllUsers();
    };
    // Description: To open the user profile page
    // parameters: none
    // return type : void
    UserListPage.prototype.openUserProfile = function (item) {
        this.base.showConsole(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__["a" /* UserProfilePage */], {
            userId: item.id
        });
    };
    // Description:  To get all the user list
    // parameters: none
    // return type : void
    UserListPage.prototype.getAllUsers = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__share_global_url__["a" /* Global */].BASE_GET_USERS, this.http.getHeaders()).subscribe(function (response) {
            if (response.status == 200) {
                _this.userList = response.json();
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_3__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_3__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-list',template:/*ion-inline-start:"E:\a\amingo\src\pages\profile-module\user-list\user-list.html"*/'\n<ion-header no-border >\n  <ion-navbar color="maincolor">\n      <button ion-button menuToggle>\n          <ion-icon name="options"></ion-icon>\n        </button>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let user of userList; let i = index;" (tap)="openUserProfile(user)">\n      <ion-avatar item-start>\n        <img src="https://i.pravatar.cc/150?img={{i+1}}">\n      </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <p>{{user.website}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\profile-module\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_base_base__["a" /* BaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsPageModule", function() { return UserPostsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_posts__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserPostsPageModule = /** @class */ (function () {
    function UserPostsPageModule() {
    }
    UserPostsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_posts__["a" /* UserPostsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_posts__["a" /* UserPostsPage */]),
            ],
        })
    ], UserPostsPageModule);
    return UserPostsPageModule;
}());

//# sourceMappingURL=user-posts.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_page_module__["a" /* PageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-module/appstart/appstart.module#AppstartPageModule', name: 'AppstartPage', segment: 'appstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-module/create-todo/create-todo.module#CreateTodoPageModule', name: 'CreateTodoPage', segment: 'create-todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-module/post-details/post-details.module#PostDetailsPageModule', name: 'PostDetailsPage', segment: 'post-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-module/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-module/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-module/user-list/user-list.module#UserListPageModule', name: 'UserListPage', segment: 'user-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-module/user-posts/user-posts.module#UserPostsPageModule', name: 'UserPostsPage', segment: 'user-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-module/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__services_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__providers_base_base__["a" /* BaseProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_module_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_module_user_list_user_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_module_appstart_appstart__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_module_create_todo_create_todo__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_module_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_module_appstart_appstart__["a" /* AppstartPage */], icon: 'home' },
            { title: 'View User', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_module_user_list_user_list__["a" /* UserListPage */], icon: 'people' },
            { title: 'To Do', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_module_create_todo_create_todo__["a" /* CreateTodoPage */], icon: 'create' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_module_login_login__["a" /* LoginPage */], icon: 'log-out' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'Logout') {
            this.nav.setRoot(page.component);
        }
        else {
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\a\amingo\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="maincolor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <div style="height:35%;background-color:  #4fc3f7">\n          <img style="width: 120px;height: 120px;border-radius: 60px;margin-top: 8%;margin-left: 12%;" src="https://i.pravatar.cc/300" imageViewer >\n          <br>\n          <p class="whitecolor" style="padding-left:12%;color:  white">Cosima Niehaus</p>\n      </div>\n     <ion-list>\n      <button style="color: #4fc3f7;" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon>  &nbsp; {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\a\amingo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseProvider = /** @class */ (function () {
    function BaseProvider(events, menuController, platform, modalCtrl, alertCtrl, loadingCtrl, toastCtrl) {
        this.events = events;
        this.menuController = menuController;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    //Description:  To show the loader
    // parameters: Duration - Time to show the loading
    // return type : void
    BaseProvider.prototype.showLoading = function (duration) {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, duration);
    };
    //Description:  To show the console log
    // parameters: none
    // return type : void
    BaseProvider.prototype.showConsole = function (msg) {
        console.log(msg);
    };
    //Description:  To show the Toast message
    // parameters: none
    // return type : void
    BaseProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    BaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], BaseProvider);
    return BaseProvider;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\a\amingo\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_module_login_login_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_module_profile_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_module_home_module__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__login_module_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__profile_module_profile_module__["a" /* PatientPortalModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_module_home_module__["a" /* HomePageModule */]
            ],
            exports: []
        })
    ], PageModule);
    return PageModule;
}());

//# sourceMappingURL=page.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPortalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_posts_user_posts_module__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PatientPortalModule = /** @class */ (function () {
    function PatientPortalModule() {
    }
    PatientPortalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_module__["UserProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_module__["UserListPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__user_posts_user_posts_module__["UserPostsPageModule"]
            ],
            exports: []
        })
    ], PatientPortalModule);
    return PatientPortalModule;
}());

//# sourceMappingURL=profile-module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appstart_appstart_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_details_post_details_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_todo_create_todo_module__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__appstart_appstart_module__["AppstartPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__post_details_post_details_module__["PostDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__create_todo_create_todo_module__["CreateTodoPageModule"]
            ],
            exports: []
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home-module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_global_url__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__share_global_url__["a" /* Global */].BASE_PROVIDER_URL;
    }
    //Description:  To getHeaders for the HTTP requests
    // parameters: none
    // return type : void
    HttpService.prototype.getHeaders = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]();
        options.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return options;
    };
    //Description:  To make HTTP get request
    // parameters: endpoint, reqOpts
    // return type : void
    HttpService.prototype.get = function (endpoint, reqOpts) {
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    //Description: To make HTTP post request
    // parameters: endpoint, body, reqOpts
    // return type : void
    HttpService.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    // Description: To make HTTP put request
    // parameters: endpoint, body, reqOpts
    // return type : void
    HttpService.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    //Description:  To make HTTP delete request
    // parameters: endpoint, reqOpts
    // return type : void
    HttpService.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_PROVIDER_URL = "https://jsonplaceholder.typicode.com";
    // post related
    Global.BASE_GET_ALL_POSTS = "posts";
    Global.BASE_GET_USER_POSTS = "posts?userId=";
    //comments related
    Global.BASE_GET_COMMENTS_OF_POST = "comments?postId=";
    // user related
    Global.BASE_GET_USERS = "users";
    Global.BASE_COMMON_DATA_ERROR = "No data found";
    Global.BASE_COMMON_API_ERROR = "Errow while getting the data, please try after sometime";
    return Global;
}());

//# sourceMappingURL=global-url.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_global_url__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_posts_user_posts__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, http, base) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.base = base;
        this.userDetails = [];
        this.userId = this.navParams.get("userId");
        this.base.showConsole("user id is " + this.userId);
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
        this.getUserDetails();
    };
    // Description:  To get the user details from the userId
    // parameters: none
    // return type : void
    UserProfilePage.prototype.getUserDetails = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_GET_USERS + "/" + this.userId, this.http.getHeaders()).subscribe(function (response) {
            if (response.status == 200) {
                _this.userDetails = response.json();
                // this.userDetails.profileImage = "https://i.pravatar.cc/150?img=" + (this.userId - 1)
                _this.userDetails.profileImage = "https://i.pravatar.cc/150?img=" + _this.userId;
                _this.userDetails.coverImage = "https://i.pravatar.cc/300";
                _this.userDetails.catchPhrase = _this.userDetails.company.catchPhrase;
                _this.userDetails.location = _this.userDetails.address.street + ", " + _this.userDetails.address.city;
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_4__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    // Description:  To open all the posts of the user
    // parameters: none
    // return type : void
    UserProfilePage.prototype.openUserPosts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_posts_user_posts__["a" /* UserPostsPage */], {
            userId: this.userId,
            userDetails: this.userDetails
        });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"E:\a\amingo\src\pages\profile-module\user-profile\user-profile.html"*/'\n<ion-content padding class="transparent-header">\n  <ion-header no-border>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + userDetails.coverImage +\')\'}"></div>\n  <div id="content">\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="userDetails.profileImage">\n      <h3 id="profile-name">{{userDetails.name}}</h3>\n      <p> <ion-icon name="pin"></ion-icon> {{userDetails.location}}</p>\n      <button ion-button small color="purple" (tap)="openUserPosts()" >10 Posts</button>\n    </div>\n    <hr/>\n  </div>\n\n    <!-- user photo section -->\n    <span>Photos</span>\n    <hr>\n    <div class="images" >\n      <div class="one-image" *ngFor="let image of [1,2,3,4,5,6,7,8,9,10,11]">\n        <img src="https://i.pravatar.cc/150?img={{image}}">\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\profile-module\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_base__["a" /* BaseProvider */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_module_user_profile_user_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_details_post_details__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_global_url__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AppstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppstartPage = /** @class */ (function () {
    function AppstartPage(navCtrl, navParams, menuCtrl, base, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.base = base;
        this.http = http;
        this.allPosts = [];
    }
    AppstartPage.prototype.ionViewDidLoad = function () {
        this.getUserDetails();
    };
    //Description:  To get the user details from the User Id passed from different pages
    // parameters: none
    // return type : void
    AppstartPage.prototype.getUserDetails = function () {
        var _this = this;
        this.base.showLoading(2000);
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__share_global_url__["a" /* Global */].BASE_GET_ALL_POSTS, this.http.getHeaders()).subscribe(function (response) {
            if (response.status == 200) {
                _this.allPosts = response.json();
                if (_this.allPosts.length > 30) {
                    _this.allPosts.length = 30;
                }
            }
            else {
                _this.base.showToast(__WEBPACK_IMPORTED_MODULE_6__share_global_url__["a" /* Global */].BASE_COMMON_DATA_ERROR);
            }
        }, function (err) {
            _this.base.showToast(__WEBPACK_IMPORTED_MODULE_6__share_global_url__["a" /* Global */].BASE_COMMON_API_ERROR);
        });
    };
    //Description:  To open the user profile page
    // parameters: none
    // return type : void
    AppstartPage.prototype.openUserProfile = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_module_user_profile_user_profile__["a" /* UserProfilePage */], {
            userId: item.userId
        });
    };
    //Description: Just post title will be shown on this page, for further details 
    //            user needs to go to details page
    // parameters: none
    // return type : void
    AppstartPage.prototype.openPostDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__post_details_post_details__["a" /* PostDetailsPage */], {
            postDetails: item
        });
    };
    AppstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-appstart",template:/*ion-inline-start:"E:\a\amingo\src\pages\home-module\appstart\appstart.html"*/'\n<ion-header no-border >\n  <ion-navbar color="maincolor">\n      <button ion-button menuToggle>\n          <ion-icon name="options"></ion-icon>\n        </button>\n    <ion-title>Amingo Room</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of allPosts; let i = index;">\n      <div >\n          <img src="https://i.pravatar.cc/{{i + 300}}" imageViewer > \n          <div (tap)="openPostDetails(post)" *ngIf="post.title" class="post-description">\n            <small>{{ post.title }}</small>\n          </div>\n      </div>\n\n      <ion-item (tap)="openUserProfile(post)">\n        <ion-avatar item-start>\n          <img src="https://i.pravatar.cc/150?img={{post.userId}}">\n        </ion-avatar>\n        <small>Usernama {{i}}</small>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\a\amingo\src\pages\home-module\appstart\appstart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_base__["a" /* BaseProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]])
    ], AppstartPage);
    return AppstartPage;
}());

//# sourceMappingURL=appstart.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map