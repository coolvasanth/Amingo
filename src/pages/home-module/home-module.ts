import { NgModule } from '@angular/core';
import { AppstartPageModule } from './appstart/appstart.module';
import { PostDetailsPageModule } from './post-details/post-details.module';
import { CreateTodoPageModule } from './create-todo/create-todo.module';


@NgModule({
	declarations: [],
	imports: [
		AppstartPageModule,
		PostDetailsPageModule,
		CreateTodoPageModule
	],
	exports: []
})
export class HomePageModule { }
