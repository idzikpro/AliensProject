import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AlienDetailsComponent} from './alien-details/alien-details.component';
import {AlienResolveService} from './alien-resolve.service';

const ALIEN_ROUTES: Route [] = [
  {
    path: 'aliens/:id',
    component: AlienDetailsComponent,
    resolve: {alien: AlienResolveService}
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(ALIEN_ROUTES)],
  exports: [RouterModule]
})
export class AliensRoutingModule {}
