import { Injectable } from '@angular/core';
import { Observable, retry, timer } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()

// interceptor service to intercept all api calls made in this application. It can be used to add token, headers that are related to api. It can also include any logic that needs to done before and after api call is made
export class HttpInterceptors implements HttpInterceptor {

     constructor() { }

     public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          request = this._addAuthHeader(request);
          request = this._setRequestWithHeaders(request);
          
          // request.withCredentials - flag for checking whether api needs auth token.
          // can add any other logic that needs to be done while making an api call.
               
          return next.handle(request).pipe(
                retry({
                    count: 1,
                    delay(error, retryCount) {
                         // now retry is only given for 500 & 502 as api fails with 502 bad gateway error
                         if ([502, 500].includes(error.status)) {
                              return timer(retryCount * 1000); //will retry 1 time if api fails with delay of 3s
                         } 
                         throw error;
                    },
               })
          )
     }

     // method used to add auth header if required
     private _addAuthHeader(request: HttpRequest<any>) {
          request = request.clone({
               setHeaders: { }
          })

          return request;
     }
     
     // method to add other http header
     private _setRequestWithHeaders(request: HttpRequest<any>) {
          request = request.clone({
               setHeaders: {
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': "Content-Type, Authorization, X-Requested-With",
                    'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS",
               },

          })

          return request;
     }
}
