import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import AppConstants from "../../app.constants.json";
import { HttpService } from "../../shared/_helpers/http.service";
import { ErrorHandlerService } from "../../shared/_helpers/error-handler.service";
import { ResponseHandlerService } from "../../shared/_helpers/response-handler.service";

@Injectable()
export class ParcFacadeService {

     constructor(
          private _httpService:HttpService,
          private _errorHandler:ErrorHandlerService,
          private _responseHandler:ResponseHandlerService
     ) {}

     public fetchParc(queryParams: string): Observable<any> {

          return this._httpService
               .get(AppConstants.API_ENDPOINTS.PARC, queryParams)
               .pipe(
                    catchError((error: HttpErrorResponse | Error): Observable<any> => {
                        this._errorHandler.handleError(error);
                         return of(error);
                    }),
                    map((response: HttpResponse<any>) => {
                         return this._responseHandler.handleResponse(response);
                    })
               );
     }
}
