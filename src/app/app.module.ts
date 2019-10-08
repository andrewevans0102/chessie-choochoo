import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { StationInformationComponent } from './station-information/station-information.component';
import { RecentsPageComponent } from './recents-page/recents-page.component';
import { HeaderComponent } from './header/header.component';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';
import { ArrivalTimesComponent } from './arrival-times/arrival-times.component';
import { MapPageComponent } from './map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    HomePageComponent,
    StationInformationComponent,
    RecentsPageComponent,
    HeaderComponent,
    BookmarkPageComponent,
    ArrivalTimesComponent,
    MapPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
