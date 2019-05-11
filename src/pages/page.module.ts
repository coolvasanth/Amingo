import { NgModule } from '@angular/core';
import { LoginPageModule } from './login-module/login/login.module';
import { PatientPortalModule } from './profile-module/profile-module';
import { HomePageModule } from './home-module/home-module';




@NgModule({
	declarations: [],
	imports: [
	LoginPageModule,
	PatientPortalModule,
	HomePageModule
	],
	exports: []
})
export class PageModule { }
