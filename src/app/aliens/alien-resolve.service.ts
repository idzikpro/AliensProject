import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Alien} from './models/alien';
import {AliensService} from './aliens.service';

@Injectable()
export class AlienResolveService implements Resolve<Alien> {

  constructor(private alienService: AliensService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.alienService.getAlien(route.params.id);
  }
}
