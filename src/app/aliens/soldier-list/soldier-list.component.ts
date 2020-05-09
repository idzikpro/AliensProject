import { Component, OnInit } from '@angular/core';
import {Ship} from '../models/ship';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Soldier} from '../models/soldier';
import {SoldiersService} from '../soldiers.service';

@Component({
  selector: 'app-soldier-list',
  templateUrl: './soldier-list.component.html',
  styleUrls: ['./soldier-list.component.less']
})
export class SoldierListComponent implements OnInit {

  soldiers: Soldier[] = [];
  soldierForm: FormGroup;
  imageToShow: any;
  isImageLoading: any;

  constructor(private soldierService: SoldiersService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadSoldiers();
    this.soldierForm = this.buildSoldierForm();
    this.getImageFromService('colonel');
  }

  buildSoldierForm() {
    return this.formBuilder.group({
      name: ['name', Validators.required],
      rank: ['rank', Validators.required],
      bravery: ['0', Validators.required],
      energy: ['0', Validators.required],
      firingAccuracy: ['0', Validators.required],
      health: ['0', Validators.required],
      strength: ['0', Validators.required],
      meleeAccuracy: ['0', Validators.required],
      psiSkill: ['0', Validators.required],
      psiStrength: ['0', Validators.required],
      reactions: ['0', Validators.required],
      throwingAccuracy: ['0', Validators.required],
      timeUnits: ['0', Validators.required],
      armourType: ['0', Validators.required],
      missions: ['0', Validators.required],
      killed: ['0', Validators.required],
      nationality: ['0', Validators.required],
    });
  }

  loadSoldiers(): void {
    this.soldierService.getSoldiers().subscribe((aliens) => {
      this.soldiers = aliens;
    });
  }

  addSoldier() {
    this.soldierService.addSoldier(this.soldierForm.value).subscribe(() => {
      this.loadSoldiers();
    });
  }
  addRandomSoldier(rank) {
    this.soldierService.addRandomSoldierByRank(rank).subscribe(() => {
      this.loadSoldiers();
    });
  }

  gotoSoldierDetails(soldier: Soldier) {
    this.router.navigate(['/soldiers', soldier.id]);
  }

  removeSoldier(soldier: Soldier, event) {
    event.stopPropagation();
    this.soldierService.removeSoldier(soldier.id).subscribe(() => {
      this.loadSoldiers();
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(rank: string) {
    this.isImageLoading = true;
    this.soldierService.getImage(rank).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  deleteAllSoldiers() {
    this.soldierService.deleteAll().subscribe(() =>
      this.loadSoldiers());
  }
}
