import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ShipDetailsComponent} from '../ship-details/ship-details.component';
import {ShipResolveService} from '../ship-resolve.service';
import {SoldierDetailsComponent} from '../soldier-details/soldier-details.component';
import {SoldierResolveService} from '../soldier-resolve.service';

const SOLDIERS_ROUTES: Route [] = [
  {
    path: 'soldiers/:id',
    component: SoldierDetailsComponent,
    resolve: {soldier: SoldierResolveService}
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(SOLDIERS_ROUTES)],
  exports: [RouterModule]
})
export class SoldierRoutingModule { }
