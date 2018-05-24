import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Player} from "../../models/player";

/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetailPage {
  
  player:Player = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = navParams.get("player")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerDetailPage');

  }

}
