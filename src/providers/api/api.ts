//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../../app/models/banner';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API_URL = "https://hack.kunderlabs.com/exam/telecom/api/products/new";

@Injectable()
export class ApiProvider {

  constructor(private http: Http) {
  }

  public getBanner(): Observable<Product> {
    return this.http
    .get(API_URL)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
