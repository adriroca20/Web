import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitHeaderComponent } from './split-header/split-header.component';
import { StaggeredGridComponent } from './staggered-grid/staggered-grid.component';



@NgModule({
  declarations: [
    SplitHeaderComponent,
    StaggeredGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SplitHeaderComponent,
    StaggeredGridComponent
  ]
})
export class HeadersModule { }
