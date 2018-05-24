import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Team } from '../../models/team';
import {TeamProvider} from "../../providers/team/team";
import SailsSocket from "sails-socket";
import _ from "lodash";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  items:any;
  TeamBaby: Team[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public team:TeamProvider) {
    this.TeamBaby = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
    this.team.getAll().subscribe(
      (result:any) => {
          //console.log(result);
          this.TeamBaby = result.body;
          console.log(this.TeamBaby);
      },
      (error) => {
          console.log(error.message)
      }
  );
  SailsSocket.on('team', (msg) => {
        let data = msg.data;
        console.log('data', data);
        console.log('before', this.TeamBaby);
        for(let item of this.TeamBaby){
            if(item.id == data.id){
                _.extend(item, data);
                console.log('in if')
            }
        }
        console.log('after', this.TeamBaby);
    });
  }
  teamSelected(team:Team){
    //this.navCtrl.push("BabyfootDetailPage", {babyfoot:babyfoot})
}

handleMessageReceived() {}

}
