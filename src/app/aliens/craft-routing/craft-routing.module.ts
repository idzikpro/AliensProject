import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CraftResolveService} from '../craft-resolve.service';
import {CraftDetailsComponent} from '../craft-details/craft-details.component';

const CRAFT_ROUTES: Route [] = [
  {
    path: 'craft/:id',
    component: CraftDetailsComponent,
    resolve: {craft: CraftResolveService}
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(CRAFT_ROUTES)],
  exports: [RouterModule]
})
export class CraftRoutingModule {}
