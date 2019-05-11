import { NgModule } from '@angular/core';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';

@NgModule({
	declarations: [],
	imports: [
        LoginPageModule,
        RegisterPageModule
	],
	exports: []
})
export class PatientPortalModule { }
