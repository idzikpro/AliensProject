import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Craft} from './models/craft';
import {CraftService} from './craft.service';

@Injectable()
export class CraftResolveService implements Resolve<Craft> {

  constructor(private craftService: CraftService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.craftService.getCraft(route.params.id);
  }
}
