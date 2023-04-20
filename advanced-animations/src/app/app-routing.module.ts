import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LightHoverComponent } from './animations/light-hover/light-hover.component';
import { FullScreenMenuComponent } from './animations/full-screen-menu/full-screen-menu.component';
import { SplitHeaderComponent } from './animations/split-header/split-header.component';
import { TwitchCardComponent } from './animations/twitch-card/twitch-card.component';
import { TextSparklesComponent } from './animations/text-sparkles/text-sparkles.component';

const routes: Routes = [
  {
    path:"",
    component:LandingComponent
  },
  {
    path:"light-hover",
    component:LightHoverComponent
  },
  {
    path:"full-screen-menu",
    component:FullScreenMenuComponent
  },
  {
    path:"split-header",
    component:SplitHeaderComponent
  },
  {
    path:"twitch-card",
    component:TwitchCardComponent
  },
  {
    path:"magic-sparkles",
    component:TextSparklesComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
