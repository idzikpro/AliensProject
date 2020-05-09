import {Component, OnInit} from '@angular/core';
import {Alien} from '../models/alien';
import {AliensService} from '../aliens.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';

@Component({
  selector: 'app-alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.less']
})
export class AlienListComponent implements OnInit {
  aliens: Alien[] = [];
  alienForm: FormGroup;


  constructor(private alienService: AliensService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadAliens();
    this.alienForm = this.buildAlienForm();

  }

  buildAlienForm() {
    return this.formBuilder.group({
      breed: ['breed', Validators.required],
      rank: ['soldier', Validators.required],
      health: ['0', Validators.required],
      energy: ['0', Validators.required],
      timeUnits: ['0', Validators.required],
      reactions: ['0', Validators.required],
      strength: ['0', Validators.required],
      bravery: ['0', Validators.required],
      firingAccuracy: ['0', Validators.required],
      throwingAccuracy: ['0', Validators.required],
      psiSkill: ['0', Validators.required],
      psiStrength: ['0', Validators.required],
      meleeAccuracy: ['0', Validators.required],
      armourFront: ['0', Validators.required],
      armourLeft: ['0', Validators.required],
      armourRight: ['0', Validators.required],
      armourRear: ['0', Validators.required],
      armourUnder: ['0', Validators.required],
      energyRecovery: ['0', Validators.required],
      victoryPoints: ['0', Validators.required],
      aggression: ['0', Validators.required],
      intelligence: ['0', Validators.required],
      heightStanding: ['0', Validators.required],
      heightKneeling: ['0', Validators.required]
    });
  }


  loadAliens(): void {
    this.alienService.getAliens().subscribe((aliens) => {
      this.aliens = aliens;
    });
  }

  addAlien() {
    this.alienService.addAlien(this.alienForm.value).subscribe(() => {
      this.loadAliens();
    });
  }

  addRandomAlien(race, rank) {
    this.alienService.addRandomAlien(race, rank).subscribe(() => {
      this.loadAliens();
    });
  }

  gotoAlienDetails(alien: Alien) {
    this.router.navigate(['/aliens', alien.id]);
  }

  removeAlien(alien: Alien, event) {
    event.stopPropagation();
    this.alienService.removeAlien(alien.id).subscribe(() => {
      this.loadAliens();
    });
  }

  deleteAllAliens() {
    this.alienService.deleteAll().subscribe(() =>
    this.loadAliens());
  }
}
