import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Craft} from '../models/craft';
import {CraftService} from '../craft.service';

@Component({
  selector: 'app-craft-details',
  templateUrl: './craft-details.component.html',
  styleUrls: ['./craft-details.component.less']
})
export class CraftDetailsComponent implements OnInit {
  craft: Craft;
  craftForm: FormGroup;

  constructor(private craftService: CraftService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadCraft();
    this.craftForm = this.buildCraftForm();
  }

  buildCraftForm() {
    return this.formBuilder.group({
      name: [this.craft.name, Validators.required],
      maxSpeed: [this.craft.maxSpeed, Validators.required],
      acceleration: [this.craft.acceleration, Validators.required],
      fuelCapacity: [this.craft.fuelCapacity, Validators.required],
      damageCapacity: [this.craft.damageCapacity, Validators.required],
      cargoSpace: [this.craft.cargoSpace, Validators.required],
      hwpCapacity: [this.craft.hwpCapacity, Validators.required],
      weaponPods: [this.craft.weaponPods, Validators.required],
    });
  }

  loadCraft() {
    this.craft = this.route.snapshot.data.craft;
  }

  updateCraft() {
    this.craftService.updateCraft(this.craft.id, this.craftForm.value).subscribe(() => {
      this.router.navigate(['/craft']);
    });
  }

}
