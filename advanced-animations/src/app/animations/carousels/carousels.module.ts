import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesGalleryComponent } from './movies-gallery/movies-gallery.component';



@NgModule({
  declarations: [
    MoviesGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MoviesGalleryComponent
  ]
})
export class CarouselsModule { }
