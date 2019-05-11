import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTodoPage } from './create-todo';

@NgModule({
  declarations: [
    CreateTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTodoPage),
  ],
})
export class CreateTodoPageModule {}
