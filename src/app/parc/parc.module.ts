import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ParcRoutingModule } from './parc-routing.module';

import { ParcFacadeService } from "./facade/parc-facade.service";
import { ParcListingComponent } from './components/parc-listing/parc-listing.component';


@NgModule({
  declarations: [
    ParcListingComponent
  ],
  imports: [
    CommonModule,
    ParcRoutingModule,
    SharedModule
  ],
  providers: [
     ParcFacadeService
  ]
})
export class ParcModule { }
