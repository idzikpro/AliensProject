import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlienListComponent } from './alien-list/alien-list.component';
import {SharedModule} from '../shared/shared.module';
import { AlienDetailsComponent } from './alien-details/alien-details.component';
import {RouterModule} from '@angular/router';
import {AlienResolveService} from './alien-resolve.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import {ShipResolveService} from './ship-resolve.service';
import { SoldierListComponent } from './soldier-list/soldier-list.component';
import { SoldierDetailsComponent } from './soldier-details/soldier-details.component';
import { CraftDetailsComponent } from './craft-details/craft-details.component';
import { CraftListComponent } from './craft-list/craft-list.component';
import {CraftResolveService} from './craft-resolve.service';

@NgModule({
  declarations: [AlienListComponent, AlienDetailsComponent, ShipListComponent, ShipDetailsComponent, ShipDetailsComponent, SoldierListComponent, SoldierDetailsComponent, CraftDetailsComponent, CraftListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [AlienListComponent],
  providers: [AlienResolveService, ShipResolveService, CraftResolveService]
})
export class AliensModule { }
