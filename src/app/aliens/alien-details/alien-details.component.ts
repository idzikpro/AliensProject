import {Component, OnInit} from '@angular/core';
import {AliensService} from '../aliens.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Alien} from '../models/alien';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alien-details',
  templateUrl: './alien-details.component.html',
  styleUrls: ['./alien-details.component.less']
})
export class AlienDetailsComponent implements OnInit {
  alien: Alien;
  alienForm: FormGroup;

  constructor(private alienService: AliensService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadAlien();
    this.alienForm = this.buildAlienForm();
  }

  buildAlienForm() {
    return this.formBuilder.group({
      breed: [this.alien.breed, Validators.required],
      rank: [this.alien.rank, Validators.required],
      health: [this.alien.health, Validators.required],
      energy: [this.alien.energy, Validators.required],
      timeUnits: [this.alien.timeUnits, Validators.required],
      reactions: [this.alien.reactions, Validators.required],
      strength: [this.alien.strength, Validators.required],
      bravery: [this.alien.bravery, Validators.required],
      firingAccuracy: [this.alien.firingAccuracy, Validators.required],
      throwingAccuracy: [this.alien.throwingAccuracy, Validators.required],
      psiSkill: [this.alien.psiSkill, Validators.required],
      psiStrength: [this.alien.psiStrength, Validators.required],
      meleeAccuracy: [this.alien.meleeAccuracy, Validators.required],
      armourFront: [this.alien.armourFront, Validators.required],
      armourLeft: [this.alien.armourLeft, Validators.required],
      armourRight: [this.alien.armourRight, Validators.required],
      armourRear: [this.alien.armourRear, Validators.required],
      armourUnder: [this.alien.armourUnder, Validators.required],
      energyRecovery: [this.alien.energyRecovery, Validators.required],
      victoryPoints: [this.alien.victoryPoints, Validators.required],
      aggression: [this.alien.aggression, Validators.required],
      intelligence: [this.alien.intelligence, Validators.required],
      heightStanding: [this.alien.heightStanding, Validators.required],
      heightKneeling: [this.alien.heightKneeling, Validators.required]
    });
  }

  loadAlien() {
    this.alien = this.route.snapshot.data.alien;
  }

  updateAlien() {
    this.alienService.updateAlien(this.alien.id, this.alienForm.value).subscribe(() => {
      this.router.navigate(['/aliens']);
    });
  }
}
