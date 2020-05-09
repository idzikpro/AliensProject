import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Soldier} from './models/soldier';
import {SoldiersService} from './soldiers.service';

@Injectable({
  providedIn: 'root'
})
export class SoldierResolveService implements Resolve<Soldier> {

  constructor(private soldiersService: SoldiersService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.soldiersService.getSoldier(route.params.id);
  }
}
