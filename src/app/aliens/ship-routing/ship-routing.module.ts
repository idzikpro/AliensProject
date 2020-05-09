import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ShipDetailsComponent} from '../ship-details/ship-details.component';
import {ShipResolveService} from '../ship-resolve.service';

const SHIPS_ROUTES: Route [] = [
  {
    path: 'ships/:id',
    component: ShipDetailsComponent,
    resolve: {ship: ShipResolveService}
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(SHIPS_ROUTES)],
  exports: [RouterModule]
})
export class ShipsRoutingModule {}
