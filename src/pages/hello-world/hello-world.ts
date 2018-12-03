import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the HelloWorldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello-world',
  templateUrl: 'hello-world.html',
})
export class HelloWorldPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloWorldPage');
  }

  ionViewCanEnter(){
    return this.loginService.loggedIn;
  }

}
