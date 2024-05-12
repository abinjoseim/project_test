import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookingClass } from '../../models/booking.class';
import { IBooking } from '../../models/booking.model';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.scss'
})

export class ViewBookingComponent implements OnInit, OnDestroy {
     
     public booking: IBooking = new BookingClass();

     constructor(
          private _ar: ActivatedRoute,
     ){ }
     
     public ngOnInit(): void {
          // booking data will be available through resolver defined in routing module
          this.booking = this._ar.snapshot.data['booking'] || "";
     }

     public ngOnDestroy(): void { }
     
}
