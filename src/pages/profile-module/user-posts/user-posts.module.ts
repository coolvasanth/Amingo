import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPostsPage } from './user-posts';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    UserPostsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(UserPostsPage),
  ],
})
export class UserPostsPageModule {}
