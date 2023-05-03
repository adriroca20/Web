import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidFlexComponent } from './fluid-flex/fluid-flex.component';



@NgModule({
  declarations: [
    FluidFlexComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FluidFlexComponent
  ]
})
export class LayoutsModule { }
