import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightHoverComponent } from './light-hover/light-hover.component';
import { FullScreenMenuComponent } from './full-screen-menu/full-screen-menu.component';
import { SplitHeaderComponent } from './split-header/split-header.component';
import { TwitchCardComponent } from './twitch-card/twitch-card.component';
import { TextSparklesComponent } from './text-sparkles/text-sparkles.component';
import { ElegantMenuComponent } from './elegant-menu/elegant-menu.component';



@NgModule({
  declarations: [
    LightHoverComponent,
    FullScreenMenuComponent,
    SplitHeaderComponent,
    TwitchCardComponent,
    TextSparklesComponent,
    ElegantMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LightHoverComponent,
    FullScreenMenuComponent,
    SplitHeaderComponent,
    TwitchCardComponent,
    TextSparklesComponent,
    ElegantMenuComponent
  ]
})
export class AnimationsModule { }
