import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayerProvider} from "../../providers/player/player";
import {Player} from "../../models/player";
import { Storage } from '@ionic/storage';
import { MatchPage } from '../match/match';
import { BabyfootPage } from '../babyfoot/babyfoot';
import { TeamPage } from '../team/team';
//  import { Items } from './../../mocks/providers/items';
//import { FakeUserProvider } from '../../providers/fake-user/fake-user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items: any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public players:PlayerProvider) {
    this.items = [];
  }


  ionViewDidLoad() {
    this.players.findTenLastUsers().subscribe(
      (result:any) => {
        this.items = result
      },
      (error) => {
        console.log(error.message)
      }
  )
    
}

  playerSelected(player:Player){
    this.navCtrl.push("PlayerDetailPage", {player:player})
  }

  match(){
    this.navCtrl.push('MatchPage')
  }

  baby(){
    this.navCtrl.push('BabyfootPage')
  }

  team(){
    this.navCtrl.push('TeamPage')
  }

}
