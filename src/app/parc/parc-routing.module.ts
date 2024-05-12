import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParcListingComponent } from './components/parc-listing/parc-listing.component';

const routes: Routes = [
     {
          path: "",
          component: ParcListingComponent
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcRoutingModule { }
