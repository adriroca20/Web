import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisesModule } from './paises/paises.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PaisesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
