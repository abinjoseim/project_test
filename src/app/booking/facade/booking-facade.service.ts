import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import AppConstants from "../../app.constants.json"; // json file to keep all constants including api urls
import { HttpService } from "../../shared/_helpers/http.service";
import { ErrorHandlerService } from "../../shared/_helpers/error-handler.service";
import { ResponseHandlerService } from "../../shared/_helpers/response-handler.service";

@Injectable()
export class BookingFacadeService {

     constructor(
          private _httpService:HttpService,
          private _errorHandler:ErrorHandlerService,
          private _responseHandler:ResponseHandlerService
     ) {}

     public fetchBookings(queryParams: string): Observable<any> {

          return this._httpService
               .get(AppConstants.API_ENDPOINTS.BOOKINGS, queryParams)
               .pipe(
                    // catch errors and process it through handler to decide whether we need to propaget it to component or bypass it
                    catchError((error: HttpErrorResponse | Error): Observable<any> => {
                         this._errorHandler.handleError(error);
                         return of(error);
                    }),
                    map((response: HttpResponse<any>) => {
                         // translates all api response into a standard pattern that is used in this project
                         return this._responseHandler.handleResponse(response);
                    })
               );

     }

     public createBooking(booking: any): Observable<any> {
    
          return this._httpService.post(AppConstants.API_ENDPOINTS.BOOKINGS, booking , false, 'json', false)
          .pipe(
               catchError((error: HttpErrorResponse | Error): Observable<any> => {
                    this._errorHandler.handleError(error);
                    return of(error);
               }),
               map((response: HttpResponse<any>) => {
                    return this._responseHandler.handleResponse(response)
               })
          )
     }

     public getBooking(bookingId: any): Observable<any> {

          let route: string = (AppConstants.API_ENDPOINTS.GET_BOOKING).replace(":id", bookingId);

          return this._httpService.get(route, "", false, true)
               .pipe(
                    catchError((error: HttpErrorResponse | Error): Observable<any> => {
                         this._errorHandler.handleError(error);
                         return of(error);
                    }),
                    map((response: HttpResponse<any>) => {
                         return this._responseHandler.handleResponse(response)
                    })
               )
     }

     public deleteBooking(bookingId: string): Observable<boolean> {

          let route: string = (AppConstants.API_ENDPOINTS.GET_BOOKING).replace(":id", bookingId);

          return this._httpService.delete(route, '', false, 'json', false)
               .pipe(
                    catchError((error: HttpErrorResponse | Error): Observable<any> => {
                         this._errorHandler.handleError(error);
                         return of(error);
                    }),
                    map((response: HttpResponse<any>) => {
                         return response.ok
                    })
               )
     }
}