import {Component, Inject} from '@angular/core';
import * as LEADERBOARDS from "../../assets/leaderboards.json";
import * as LOGOS from "../../assets/logo_binding";
import {fade} from './../animations'

@Component({
  selector: 'app-leaderboard-podium',
  templateUrl: './leaderboard-podium.component.html',
  styleUrls: ['./leaderboard-podium.component.css'],
  animations: [
    fade
  ]
})
export class LeaderboardPodiumComponent {
  leaderboards: any = LEADERBOARDS;
  leaderboard: any;
  logos = LOGOS.logoObj;
  palio_year: string;
  constructor(@Inject('token') palio_year: string) {
    this.palio_year = palio_year;
    this.leaderboard = this.leaderboards[this.palio_year].sort((a: { posizione: string; }, b: { posizione: string; }) => parseInt(a.posizione) - parseInt(b.posizione)).slice(0, 3);
  }
  bronze_trophy: string = './assets/image/bronze-cup.png';
  silver_trophy: string = './assets/image/silver-cup.png';
  gold_trophy: string = './assets/image/gold-cup.png';
}
