import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarEntryComponent } from './nav-bar-entry/nav-bar-entry.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MainContainerBannerComponent } from './main-container-banner/main-container-banner.component';
import { RouterModule } from '@angular/router';
import { PalioMainComponent } from './palio-main/palio-main.component';
import { LeaderboardMainComponent } from './leaderboard-main/leaderboard-main.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { LeaderboardListComponent } from './leaderboard-list/leaderboard-list.component';
import { LeaderboardElementComponent } from './leaderboard-element/leaderboard-element.component';
import { LeaderboardContainerComponent } from './leaderboard-container/leaderboard-container.component';
import { LeaderboardPodiumComponent } from './leaderboard-podium/leaderboard-podium.component';
import { LeaderboardPodiumElementComponent } from './leaderboard-podium-element/leaderboard-podium-element.component';
import { LeaderboardYearSelectionComponent } from './leaderboard-year-selection/leaderboard-year-selection.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarEntryComponent,
    PageTitleComponent,
    MainContainerBannerComponent,
    PalioMainComponent,
    LeaderboardMainComponent,
    AboutMainComponent,
    HomeMainComponent,
    LeaderboardListComponent,
    LeaderboardElementComponent,
    LeaderboardContainerComponent,
    LeaderboardPodiumComponent,
    LeaderboardPodiumElementComponent,
    LeaderboardYearSelectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeMainComponent},
      {path: 'palio-di-ateneo', component: PalioMainComponent},
      {path: 'classifica', component: LeaderboardMainComponent},
      {path: 'about', component: AboutMainComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
