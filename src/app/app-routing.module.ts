import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AlienListComponent} from './aliens/alien-list/alien-list.component';
import {ShipListComponent} from './aliens/ship-list/ship-list.component';
import {SoldierListComponent} from './aliens/soldier-list/soldier-list.component';
import {CraftListComponent} from './aliens/craft-list/craft-list.component';

const APP_ROUTES: Route [] = [
  {path: '', pathMatch: 'full', redirectTo: 'aliens'},
  {path: 'aliens', component: AlienListComponent},
  {path: 'ships', component: ShipListComponent},
  {path: 'soldiers', component: SoldierListComponent},
  {path: 'craft', component: CraftListComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
