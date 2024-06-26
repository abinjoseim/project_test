import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListingComponent } from './components/user-listing/user-listing.component';

const routes: Routes = [
     {
          path: '',
          component: UserListingComponent,
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
