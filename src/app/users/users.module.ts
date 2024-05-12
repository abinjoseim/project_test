import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from "../shared/shared.module";

import { UserListingComponent } from './components/user-listing/user-listing.component';
import { UserFacadeService } from "./facade/user-facade.service";

@NgModule({
  declarations: [
    UserListingComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  providers: [
    UserFacadeService
  ]
})

export class UsersModule { }
