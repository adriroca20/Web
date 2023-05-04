import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidFlexComponent } from './fluid-flex/fluid-flex.component';
import { ClampComponent } from './clamp/clamp.component';



@NgModule({
  declarations: [
    FluidFlexComponent,
    ClampComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FluidFlexComponent,
    ClampComponent
  ]
})
export class LayoutsModule { }
