import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserFacadeService } from '../../../users/facade/user-facade.service';
import { IApiresponse } from '../../../shared/models/common.model';
import { ParcFacadeService } from "../../../parc/facade/parc-facade.service";
import { BookingFacadeService } from "../../facade/booking-facade.service";

import { IUsers } from "../../../users/models/users.model";
import { IParc } from "../../../parc/models/parc.model";
import { IBooking } from '../../models/booking.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.scss',
  providers:[ 
     UserFacadeService,
     ParcFacadeService,
     BookingFacadeService
     ]
})

export class CreateBookingComponent implements OnInit {

     // To show loading spinner while making an api call
     public loadingStates: { [key: string]: boolean } = {};
     // To show error in UI if user or parc apis fails to load
     public errors: { user:boolean, parc:boolean } = { parc:false, user:false };
     public users: IUsers[] = [];
     public parcs: IParc[] = [];
     public bookingForm: FormGroup = this._fb.group({
          user: ['', Validators.required],
          parc:['',Validators.required],
          bookingdate:['',Validators.required],
          comments:['']
     });

     constructor(
          private _fb: FormBuilder,
          private _nS: MatSnackBar,
          private _uService: UserFacadeService,
          private _pService: ParcFacadeService,
          private _bService: BookingFacadeService,
          public dialogRef: MatDialogRef<CreateBookingComponent>
     ) { }

     public ngOnInit(): void { 
          this._fetchUsers(); // to fetch users to show in dropdown of create form
          this._fetchParc(); //  to fetch parc to show in dropwdown of create form
     }

     public get bookingFormControl() {
          return this.bookingForm.controls;
     }

     public createBooking(): void {
          if(this.bookingForm.invalid) {
               this.bookingForm.markAllAsTouched();
               return;
          }

          this.loadingStates['create_booking'] = true;
          this._bService.createBooking(this.bookingForm.value)
               .subscribe((response: IApiresponse<IBooking>)=>{
                    this.loadingStates['create_booking'] = false;

                    if(!!response.data) {
                         this._nS.open("Successfully create booking","close", { duration:3000 })
                         this.dialogRef.close(true); // parameter passed is used to determine whether we need to refresh booking table
                    }
                    else this.dialogRef.close(false);
               })
          
     }

     private _fetchUsers(): void {
          let params: string = ""; // this can be used to pass any query param if required
          this.loadingStates['load_user'] = true;
          this.errors.user = false;
          
          this._uService.fetchUsers(params)
              .subscribe((response: IApiresponse<IUsers>) => {
               this.loadingStates['load_user'] = false;
               this.users = [];
                  
               if(!!response.data && !!response.data && response.data.length > 0) {
                    this.users = [...response.data];
               }
               else this.errors.user = true;
              })
     }

     private _fetchParc(): void {
          let params: string = "";
          this.loadingStates['load_parc'] = true;
          this.errors.parc = false

          this._pService.fetchParc(params)
              .subscribe((response: IApiresponse<IParc>) => {
               this.loadingStates['load_parc'] = false;
               this.parcs = [];
               
               if(!!response.data && !!response.data && response.data.length > 0) {
                    this.parcs = [...response.data];
               }
               else this.errors.parc = true;
              })
     }

}
