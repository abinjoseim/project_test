import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { environment } from "../../../environment/environment";

@Injectable({
     providedIn: 'root'
})

// service where http methods are defined
export class HttpService {

     public apiBaseUrl: string = environment.apiBaseUrl;

     constructor(
          private _http: HttpClient
     ) { }

     
     // url will be backend url.
     // queryparams will be params needed for api.
     // withCredentials flag used to check whether api call needs and auth token.
     // withLoader flag is used to set a global spinner loader when an api call is made.     
     public get(url: any, queryParams?: any, withCredentials: boolean = true, withLoader: boolean = false): Observable<any> {
          
          if (queryParams) url = `${url}?${queryParams}`;
         
          return this._http
               .get(`${this.apiBaseUrl}${url}`);
     }

     public post(url: any, data: any, withCredentials: boolean = true, responseType: any = 'json', withLoader: boolean = false, requestType: any = 'json'): Observable<HttpResponse<any>> {
          const headers = new HttpHeaders()
               .set('reso_type', requestType);

          return this._http
               .post<HttpResponse<any>>(`${this.apiBaseUrl}${url}`, data,
                    {
                         headers: headers,
                         responseType: responseType,
                    });
     }

     public delete(url: any, queryParams?: any, withCredentials: boolean = true, responseType: any = 'json', withLoader: boolean = false, requestType: any = 'json'): Observable<HttpResponse<any>> {
          
          const headers = new HttpHeaders()
               .set('reso_type', requestType);
          if (queryParams) url = `${url}?query=${queryParams}`;

          return this._http
               .delete<HttpResponse<any>>(`${this.apiBaseUrl}${url}`,
                    {
                         headers: headers,
                         responseType: responseType,
                         observe: 'response'
                    });
     }
     
     // all other http methods goes here!
}
