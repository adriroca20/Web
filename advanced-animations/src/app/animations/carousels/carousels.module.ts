import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesGalleryComponent } from './movies-gallery/movies-gallery.component';
import { FilterCardComponent } from './filter-card/filter-card.component';



@NgModule({
  declarations: [
    MoviesGalleryComponent,
    FilterCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MoviesGalleryComponent,
    FilterCardComponent
  ]
})
export class CarouselsModule { }
