import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('usr') usr;
  @ViewChild('pwd') pwd;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  logIn() {
    if (this.usr.value == 'usuario' && this.pwd.value == '12345') {
        this.navCtrl.setRoot(TabsPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error de autenticación!',
        subTitle: 'Usuario o Constraseña inválidos.',
        buttons: ['OK']
      });
      
      alert.present();
    }

  }

}
