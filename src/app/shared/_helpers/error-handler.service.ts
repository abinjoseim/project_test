import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

// error handler service used to catch all errors happen is application based on error type and use accordingly. Here we are sending a notification of error
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private _ngZone: NgZone,
    private _not: MatSnackBar
  ) { }

  public handleError(error: Error | HttpErrorResponse): void {

    let message: string, stackTrace: any, summary: string = "";
    message = this.getErrorMessage(error);
    stackTrace = this.getErrorStack(error);

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 500:
          summary = `${error.status}: Internal Server Error`;
          message = error.error?.message;
          break;

        default:
          summary = error?.error?.status || error.statusText;
          message = error.error?.message || error.message;
          break;
      }

      this._ngZone.run(() => console.log("error"))
      this._not.open(`Something went wrong try again - ${summary}`, "close",{duration:3000});
    }
    else {
      //can show error notification as "something went wrong"
    }

    this.logError(message, stackTrace);
    // can make error log api call to have server log for UI if needed
  }

  public getErrorMessage(error: Error) {
    return error.message ? error.message : error.toString();
  }

  public getErrorStack(error: Error) {
    return error.stack ? error.stack : error;
  }

  public logError(error: any, errorStack: any) {
    console.error(`${error}${errorStack}`);
    // throw new Error(`${error}${errorStack}`); // can throw if needed
  }

}
