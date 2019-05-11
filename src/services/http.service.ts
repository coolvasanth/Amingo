import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Global } from '../share/global-url';

@Injectable()
export class HttpService{   
    url: string = Global.BASE_PROVIDER_URL;
    constructor(private http: Http){
    }

      //Description:  To getHeaders for the HTTP requests
      // parameters: none
      // return type : void
      getHeaders() {
        let options = new RequestOptions();
        options.headers = new Headers({ 'Content-Type': 'application/json' });
        return options;
      }

      //Description:  To make HTTP get request
      // parameters: endpoint, reqOpts
      // return type : void
      get(endpoint: string,  reqOpts?: any) {       
        return this.http.get(this.url + '/' + endpoint, reqOpts);
      }
      
      //Description: To make HTTP post request
      // parameters: endpoint, body, reqOpts
      // return type : void
      post(endpoint: string, body: any, reqOpts?: any) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
      }
      
      // Description: To make HTTP put request
      // parameters: endpoint, body, reqOpts
      // return type : void
      put(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
      }
    
      //Description:  To make HTTP delete request
      // parameters: endpoint, reqOpts
      // return type : void
      delete(endpoint: string, reqOpts?: any) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
      }
}