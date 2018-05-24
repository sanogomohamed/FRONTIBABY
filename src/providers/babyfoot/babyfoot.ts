import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import SailsSocket from "sails-socket"
import { fromPromise } from 'rxjs/observable/fromPromise';

/*
  Generated class for the BabyfootProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyfootProvider {

    constructor(public api: Api) {
    }

    getAll() {
        return fromPromise(SailsSocket.get('/babyfoot'));
    }
}