import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MatchProvider} from "../../providers/match/match";
import {Match} from "../../models/match";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  items:any;
  MatchBaby: Match[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public match:MatchProvider) {
    this.MatchBaby = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

 

}
