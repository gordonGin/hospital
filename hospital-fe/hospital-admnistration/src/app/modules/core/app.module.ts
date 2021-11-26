import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TileComponent } from './components/tile/tile.component';
import { ButtonComponent } from './components/button/button.component';
import { ModeOptionsComponent } from './components/mode-options/mode-options.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { MapMedicalConditionPipe } from './map-medical-condition.pipe';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TileComponent,
    ButtonComponent,
    ModeOptionsComponent,
    HomeComponent,
    MapMedicalConditionPipe,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
