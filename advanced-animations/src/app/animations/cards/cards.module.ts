import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePaneComponent } from './image-pane/image-pane.component';
import { LightHoverComponent } from './light-hover/light-hover.component';
import { TwitchCardComponent } from './twitch-card/twitch-card.component';



@NgModule({
  declarations: [
    ImagePaneComponent,
    LightHoverComponent,
    TwitchCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagePaneComponent,
    LightHoverComponent,
    TwitchCardComponent
  ]
})
export class CardsModule { }
