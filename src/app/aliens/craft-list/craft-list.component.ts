import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Craft} from '../models/craft';
import {CraftService} from '../craft.service';

@Component({
  selector: 'app-craft-list',
  templateUrl: './craft-list.component.html',
  styleUrls: ['./craft-list.component.less']
})
export class CraftListComponent implements OnInit {

  craft: Craft[] = [];
  craftForm: FormGroup;

  constructor(private craftService: CraftService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadCrafts();
    this.craftForm = this.buildCraftForm();

  }

  buildCraftForm() {
    return this.formBuilder.group({
      name: ['0', Validators.required],
      maxSpeed: ['0', Validators.required],
      acceleration: ['0', Validators.required],
      fuelCapacity: ['0', Validators.required],
      damageCapacity: ['0', Validators.required],
      cargoSpace: ['0', Validators.required],
      hwpCapacity: ['0', Validators.required],
      weaponPods: ['0', Validators.required],
    });
  }

  loadCrafts(): void {
    this.craftService.getCrafts().subscribe((aliens) => {
      this.craft = aliens;
    });
  }

  addCraft() {
    this.craftService.addCraft(this.craftForm.value).subscribe(() => {
      this.loadCrafts();
    });
  }

  addCraftByName(name) {
    this.craftService.addCraftByName(name).subscribe(() => {
      this.loadCrafts();
    });
  }

  gotoCraftDetails(craft: Craft) {
    this.router.navigate(['/craft', craft.id]);
  }

  removeCraft(craft: Craft, event) {
    event.stopPropagation();
    this.craftService.removeCraft(craft.id).subscribe(() => {
      this.loadCrafts();
    });
  }

  deleteAllCraft() {
    this.craftService.deleteAll().subscribe(() =>
      this.loadCrafts());
  }
}
