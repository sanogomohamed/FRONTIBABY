import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Babyfoot} from "../../models/babyfoot";

/**
 * Generated class for the BabyfootDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-babyfoot-detail',
  templateUrl: 'babyfoot-detail.html',
})
export class BabyfootDetailPage {
    babyfoot:Babyfoot = {};

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.babyfoot = navParams.get("babyfoot")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BabyfootDetailPage');
  }

}
