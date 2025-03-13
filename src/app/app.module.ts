import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScossMatModule } from './common/mat/mat.module';
import { ScossCommonModule } from './common/common.module';
import {
  HomeComponent, ServiceComponent, EventsComponent,
  GalleryComponent, ContactComponent, AboutComponent,
  UnderConstructionComponent
} from './components';
import { GalleryUnitComponent } from './components/gallery-unit/gallery-unit.component';
import { ValuePropositionSectionComponent } from './components/home/value-proposition-section/value-proposition-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    UnderConstructionComponent,
    GalleryUnitComponent,
    ValuePropositionSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScossMatModule,
    ScossCommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
