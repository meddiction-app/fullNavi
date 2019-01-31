import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreatmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html',
})
export class TreatmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    (<any>window).my_function = this.my_function.bind(this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentPage');
  }

  my_function(var_name){
    console.log(var_name);
  }

}
