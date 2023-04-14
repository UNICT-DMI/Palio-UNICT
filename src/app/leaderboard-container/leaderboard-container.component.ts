import {Component, Inject} from '@angular/core';
import {fade} from './../animations'

@Component({
  selector: 'app-leaderboard-container',
  templateUrl: './leaderboard-container.component.html',
  styleUrls: ['./leaderboard-container.component.css'],
  animations: [
    fade
  ]
})
export class LeaderboardContainerComponent {
  palio_year: string;
  constructor(@Inject('token') palio_year: string) {
    this.palio_year = palio_year;
  }
}
