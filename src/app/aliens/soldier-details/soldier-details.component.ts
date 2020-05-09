import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Soldier} from '../models/soldier';
import {SoldiersService} from '../soldiers.service';

@Component({
  selector: 'app-soldier-details',
  templateUrl: './soldier-details.component.html',
  styleUrls: ['./soldier-details.component.less']
})
export class SoldierDetailsComponent implements OnInit {

  soldier: Soldier;
  soldierForm: FormGroup;

  constructor(private soldierService: SoldiersService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadSoldier();
    this.soldierForm = this.buildSoldierForm();
  }

  buildSoldierForm() {
    return this.formBuilder.group({
      name: [this.soldier.name, Validators.required],
      rank: [this.soldier.rank, Validators.required],
      bravery: [this.soldier.bravery, Validators.required],
      energy: [this.soldier.energy, Validators.required],
      firingAccuracy: [this.soldier.firingAccuracy, Validators.required],
      health: [this.soldier.health, Validators.required],
      strength: [this.soldier.strength, Validators.required],
      meleeAccuracy: [this.soldier.meleeAccuracy, Validators.required],
      psiSkill: [this.soldier.psiSkill, Validators.required],
      psiStrength: [this.soldier.psiStrength, Validators.required],
      reactions: [this.soldier.reactions, Validators.required],
      throwingAccuracy: [this.soldier.throwingAccuracy, Validators.required],
      timeUnits: [this.soldier.timeUnits, Validators.required],
      armourType: [this.soldier.armourType, Validators.required],
      missions: [this.soldier.missions, Validators.required],
      killed: [this.soldier.killed, Validators.required],
      nationality: [this.soldier.nationality, Validators.required]
    });
  }

  loadSoldier() {
    this.soldier = this.route.snapshot.data.soldier;
  }

  updateSoldier() {
    this.soldierService.updateSoldier(this.soldier.id, this.soldierForm.value).subscribe(() => {
      this.router.navigate(['/soldiers']);
    });
  }

}
