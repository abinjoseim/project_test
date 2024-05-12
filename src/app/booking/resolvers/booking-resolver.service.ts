import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { BookingFacadeService } from '../facade/booking-facade.service';

@Injectable()

// resolver used to fetch booking details for booking details route. Data will be supplied before page load
export class BookingResolverService implements Resolve<boolean> {

  constructor(
     private _router: Router,
     private _service: BookingFacadeService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
     return this._service.getBooking(route.params['id'])
     .pipe(
          map((res: any) => {
               if(!res.data) return this.navigateFun();
               return res.data;
          }),
          catchError((error: HttpErrorResponse | Error): Observable<any> => {
              return this.navigateFun();
          })
     );
  }

  // we will redirect to booking page if something fails in resolver
  private navigateFun(): Observable<any> {
     this._router.navigateByUrl('/')
     return EMPTY;
  }
}
