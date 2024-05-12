import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { BookingRoutingModule } from './booking-routing.module';

import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { ListBookingComponent } from './components/list-booking/list-booking.component';

import { BookingFacadeService } from "./facade/booking-facade.service";
import { BookingResolverService } from "./resolvers/booking-resolver.service";

@NgModule({
     declarations: [
          CreateBookingComponent,
          ViewBookingComponent,
          ListBookingComponent
     ],
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          BookingRoutingModule,
          SharedModule
     ],
     providers:[
          BookingFacadeService,
          BookingResolverService,
     ],
     schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BookingModule {}
