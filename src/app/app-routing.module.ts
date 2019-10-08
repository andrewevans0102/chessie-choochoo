import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StationInformationComponent } from './station-information/station-information.component';
import { RecentsPageComponent } from './recents-page/recents-page.component';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'station-information/:LineCode/:StationCode',
    component: StationInformationComponent
  },
  { path: 'recents-page', component: RecentsPageComponent },
  {
    path: 'bookmarks-page/:LineCode/:StationCode',
    component: BookmarkPageComponent
  },
  {
    path: 'map-page',
    component: MapPageComponent
  },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
