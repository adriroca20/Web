import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverButtonsComponent } from './hover-buttons/hover-buttons.component';
import { DarkModeTogglerComponent } from './dark-mode-toggler/dark-mode-toggler.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [HoverButtonsComponent, DarkModeTogglerComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    HoverButtonsComponent,
    DarkModeTogglerComponent
  ]
})
export class ButtonsModule { }
