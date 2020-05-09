import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AliensModule} from './aliens/aliens.module';
import {AliensService} from './aliens/aliens.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AliensRoutingModule} from './aliens/aliens-routing.module';
import {ShipsRoutingModule} from './aliens/ship-routing/ship-routing.module';
import {SoldierRoutingModule} from './aliens/soldier-routing/soldier-routing.module';
import {CraftRoutingModule} from './aliens/craft-routing/craft-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AliensModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    AliensRoutingModule,
    ShipsRoutingModule,
    SoldierRoutingModule,
    CraftRoutingModule
  ],
  providers: [AliensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
