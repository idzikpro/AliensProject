import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UnitsPipe } from './pipes/units.pipe';
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  declarations: [HeaderComponent, UnitsPipe, ImportantDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,
  UnitsPipe, ImportantDirective]
})
export class SharedModule { }
