import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import SailsSocket from "sails-socket"
import { fromPromise } from 'rxjs/observable/fromPromise';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

  constructor(public api: Api){
    console.log('Hello TeamProvider Provider');
  }

  getAll() {
    return fromPromise(SailsSocket.get('/team'));
}



}
