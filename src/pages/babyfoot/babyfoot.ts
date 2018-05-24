import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Babyfoot} from "../../models/babyfoot";
import {BabyfootProvider} from "../../providers/babyfoot/babyfoot";
import SailsSocket from "sails-socket";
import _ from "lodash";

/**
 * Generated class for the BabyfootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-babyfoot',
  templateUrl: 'babyfoot.html',
})
export class BabyfootPage {

    items:any;
    allFussballTables: Babyfoot[];

    constructor(public navCtrl: NavController,public babyfoot: BabyfootProvider, public navParams: NavParams) {
        this.allFussballTables = [];
    }


    ionViewDidLoad() {
        this.babyfoot.getAll().subscribe(
            (result:any) => {
                console.log(result);
                this.allFussballTables = result.body;
            },
            (error) => {
                console.log(error.message)
            }
        );
        SailsSocket.on('babyfoot', (msg) => {
            let data = msg.data;
            console.log('data', data);
            console.log('before', this.allFussballTables);
            for(let item of this.allFussballTables){
                if(item.id == data.id){
                    _.extend(item, data);
                    console.log('in if')
                }
            }
            console.log('after', this.allFussballTables);
        });


    }



    tableSelected(babyfoot:Babyfoot){
        this.navCtrl.push("BabyfootDetailPage", {babyfoot:babyfoot})
    }

    handleMessageReceived() {

    }

}