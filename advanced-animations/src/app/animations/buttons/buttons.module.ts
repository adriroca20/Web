import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverButtonsComponent } from './hover-buttons/hover-buttons.component';



@NgModule({
  declarations: [HoverButtonsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HoverButtonsComponent
  ]
})
export class ButtonsModule { }
