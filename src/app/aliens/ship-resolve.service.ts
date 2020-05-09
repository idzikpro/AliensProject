import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ShipsService} from './ships.service';
import {Ship} from './models/ship';



@Injectable()
export class ShipResolveService implements Resolve<Ship> {

  constructor(private shipService: ShipsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.shipService.getShip(route.params.id);
  }
}
