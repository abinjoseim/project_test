import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBookingComponent } from './components/list-booking/list-booking.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { BookingResolverService } from './resolvers/booking-resolver.service';

// available routes in booking module
const routes: Routes = [
  {
    path: '',
    component: ListBookingComponent,
  },
  {
    path: ':id', // path of booking details page, :id represents booking id in url
    component: ViewBookingComponent,
    resolve: { booking: BookingResolverService } // To provide booking data before route loades
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BookingRoutingModule {}
