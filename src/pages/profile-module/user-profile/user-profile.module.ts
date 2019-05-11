import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(UserProfilePage),
  ],
})
export class UserProfilePageModule {}
