import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavyLoaderComponent } from './wavy-loader/wavy-loader.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    WavyLoaderComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    WavyLoaderComponent
  ]
})
export class LoadersModule { }
