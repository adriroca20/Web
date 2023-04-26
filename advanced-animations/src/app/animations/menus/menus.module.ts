import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElegantMenuComponent } from './elegant-menu/elegant-menu.component';
import { FullScreenMenuComponent } from './full-screen-menu/full-screen-menu.component';



@NgModule({
  declarations: [
    ElegantMenuComponent,
    FullScreenMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ElegantMenuComponent,
    FullScreenMenuComponent
  ]
})
export class MenusModule { }
