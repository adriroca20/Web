import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
import { CardsModule } from './cards/cards.module';
import { HeadersModule } from './headers/headers.module';
import { MenusModule } from './menus/menus.module';
import { MouseTrailersModule } from './mouse-trailers/mouse-trailers.module';
import { TextModule } from './text/text.module';
import { LoadersModule } from './loaders/loaders.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CardsModule,
    HeadersModule,
    MenusModule,
    MouseTrailersModule,
    TextModule,
    LoadersModule
  ],
  exports:[

  ]
})
export class AnimationsModule { }
