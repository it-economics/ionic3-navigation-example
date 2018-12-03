import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  loggedIn = false;

  constructor() {
    console.log('Hello LoginProvider Provider');
  }

  login(): Observable<boolean>{
    return Observable.of(true).pipe(
      delay(2000),
      tap(value => this.loggedIn=true)
      )
  }



}
