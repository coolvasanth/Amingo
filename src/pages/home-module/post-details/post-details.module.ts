import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetailsPage } from './post-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    PostDetailsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(PostDetailsPage),
  ],
})
export class PostDetailsPageModule {}
