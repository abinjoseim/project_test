import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WildcardComponent } from './shared/components/wildcard/wildcard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bookings',
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'parc',
    loadChildren: () => import('./parc/parc.module').then((m) => m.ParcModule),
  },
  {
    path: '**', // invalid route configuration
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    component: WildcardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
