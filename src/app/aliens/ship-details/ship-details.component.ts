import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShipsService} from '../ships.service';
import {Ship} from '../models/ship';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.less']
})
export class ShipDetailsComponent implements OnInit {
  ship: Ship;
  shipForm: FormGroup;

  constructor(private shipService: ShipsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadShip();
    this.shipForm = this.buildShipForm();
  }

  buildShipForm() {
    return this.formBuilder.group({
      size: [this.ship.size, Validators.required],
      name: [this.ship.name, Validators.required],
      maxSpeed: [this.ship.maxSpeed, Validators.required],
      weaponPower: [this.ship.weaponPower, Validators.required],
      weaponRangeKm: [this.ship.weaponRangeKm, Validators.required],
      weaponRangeUnits: [this.ship.weaponRangeUnits, Validators.required],
      damageCapacity: [this.ship.damageCapacity, Validators.required],
      downedPoints: [this.ship.downedPoints, Validators.required],
      destroyedPoints: [this.ship.destroyedPoints, Validators.required],
      escapeTime: [this.ship.escapeTime, Validators.required],
      firingInterval: [this.ship.firingInterval, Validators.required],
    });
  }

  loadShip() {
    this.ship = this.route.snapshot.data.ship;
  }

  updateShip() {
    this.shipService.updateShip(this.ship.id, this.shipForm.value).subscribe(() => {
      this.router.navigate(['/ships']);
    });
  }

}
