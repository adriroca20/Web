import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartMouseComponent } from './smart-mouse/smart-mouse.component';



@NgModule({
  declarations: [
    SmartMouseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SmartMouseComponent
  ]
})
export class MouseTrailersModule { }
