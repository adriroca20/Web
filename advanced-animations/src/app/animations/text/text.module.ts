import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSparklesComponent } from './text-sparkles/text-sparkles.component';



@NgModule({
  declarations: [
    TextSparklesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TextSparklesComponent
  ]
})
export class TextModule { }
