import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// service to handle and translate response based on error status code from api. We can add some other methods to handle response according to nature of api
export class ResponseHandlerService {

  constructor() { }

  // decides whether we need to propagte error/success to specific components based on HTTP Status codes
  public handleResponse(response: any): any {

    let responseObj: { data?: any, message?: any, errors?: any } = {};

    // can add all possible status code based on your api response.
    // 422 errors will be propagted into components to display in component to user
    if (response.status && [422].includes(response.status)) {
      responseObj.errors = response.error.errors;
    }
    else if ([401].includes(response.status) || response.error) {
      responseObj = {}
    }
    // success call - 200
    else {
      responseObj.data = response.data ? response.data : response;
      responseObj.message = response.message ? response.message : "Sucess";
    }

    return responseObj;
  }

}
