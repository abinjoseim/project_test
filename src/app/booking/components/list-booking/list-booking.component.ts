import { lastValueFrom } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BookingFacadeService } from "../../facade/booking-facade.service";
import { IApiresponse } from '../../../shared/models/common.model';
import { BookingClass } from '../../models/booking.class';
import { IBooking } from '../../models/booking.model';

import { CreateBookingComponent } from "../create-booking/create-booking.component";
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss',
})

export class ListBookingComponent implements OnInit, OnDestroy {

     public loadingStates: { [key: string]: boolean } = {};
     public bookings: IBooking[] = [];

     constructor(
          private _ms: MatDialog,
          private _service:BookingFacadeService
     ) {}

     public ngOnInit(): void {
          this._fetcBookings(); // make api call to fetch booking
     }

     public ngOnDestroy(): void {} // can add functionality when this component is destoryed

     public async openCreateBookingModal(): Promise<void> {
          let response:boolean = await lastValueFrom(this._ms.open(CreateBookingComponent).afterClosed());
          
          if(response) this._fetcBookings(); // if create booking is success, then fetch bookings again to refresh booking table
     }

     public async deleteBooking(bookingId:string): Promise<void> {
          // an interactive confirmation modal is shown when user tries to delete a booking
          let response:boolean = await lastValueFrom(this._ms.open(ConfirmationModalComponent).afterClosed());

          if(response) {
               this._service.deleteBooking(bookingId)
                    .subscribe((response: boolean)=>{
                         if(response) this._fetcBookings();
                    })
          }
     }

     // a mock function used in template to create skeleton rows while loading contents in table.
     public createArray(length: number): Array<number> {
          return isNaN(length) ? Array(0) : Array(length);
     }

     private _fetcBookings(): void {
          let params: string = "";
          this.loadingStates['load_results'] = true;

          this._service.fetchBookings(params)
              .subscribe((response: IApiresponse<IBooking>) => {
                  this.loadingStates['load_results'] = false;
                  this.bookings = [];
                  
                  if(!!response.data && !!response.data && response.data.length > 0) {
                         this.bookings = [...response.data.map((booking:IBooking) => new BookingClass(booking))];
                    }
              })
     }
}
