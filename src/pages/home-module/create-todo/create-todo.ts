import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseProvider } from '../../../providers/base/base';

/**
 * Generated class for the CreateTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-todo',
  templateUrl: 'create-todo.html',
})
export class CreateTodoPage {
  todos: string[] = [];
  todo: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public base: BaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTodoPage');
  }

  // Description:  To add the todo item to the list
  // parameters: none
  // return type : void
  add() {
    console.log(this.todo)
    debugger
    if(this.todo == undefined || this.todo == null || this.todo == ""){
      this.base.showToast("Please enter some item")
    }else{
    this.todos.push(this.todo);
    this.todo = "";
    }
}

//Description: To delete an item from the list
// parameters: none
// return type : void
delete(item) {
    var index = this.todos.indexOf(item, 0);
    if (index > -1) {
        this.todos.splice(index, 1);
    }
}

}
