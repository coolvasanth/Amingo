import { Injectable } from '@angular/core';
import { AlertController, MenuController, LoadingController, ToastController, ModalController, Platform, Events, Toast } from 'ionic-angular';

@Injectable()
export class BaseProvider {
    
    constructor(public events: Events, public menuController: MenuController,
       public platform: Platform, public modalCtrl: ModalController,  
       public alertCtrl: AlertController, public loadingCtrl: LoadingController,
       private toastCtrl: ToastController) {
    }

    //Description:  To show the loader
    // parameters: Duration - Time to show the loading
    // return type : void
    showLoading(duration){
        let loading  = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
          loading.present();
          setTimeout(() => {
            loading.dismiss();
          }, duration);
    }

    //Description:  To show the console log
    // parameters: none
    // return type : void
    showConsole(msg){
      console.log(msg);
    }

    //Description:  To show the Toast message
    // parameters: none
    // return type : void
    showToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  
}