import { NgModule } from '@angular/core';
import { UserProfilePageModule } from './user-profile/user-profile.module';
import { UserListPageModule } from './user-list/user-list.module';
import { UserPostsPageModule } from './user-posts/user-posts.module';

@NgModule({
	declarations: [],
	imports: [
	UserProfilePageModule,
	UserListPageModule,
	UserPostsPageModule
	],
	exports: []
})
export class PatientPortalModule { }
