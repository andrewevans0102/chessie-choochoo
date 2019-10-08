import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recents-page',
  templateUrl: './recents-page.component.html',
  styleUrls: ['./recents-page.component.scss']
})
export class RecentsPageComponent implements OnInit {
  constructor(public router: Router) {}
  recents = [];

  ngOnInit() {
    const recentStorage = JSON.parse(
      localStorage.getItem('chessieChooChooRecents')
    );
    let recentCount = 0;
    if (recentStorage !== null) {
      // check for any values that are too old
      recentStorage.forEach(recent => {
        const recentDate = new Date(recent.recorded);
        const sevenDays = 24 * 60 * 60 * 1000 * 7; // 7 days
        // const sevenDays = 1000 * 60;
        const todaysDate = new Date();
        const sevenDaysAgoNumber = todaysDate.getTime() - sevenDays;
        const sevenDaysAgoDate = new Date(sevenDaysAgoNumber);
        if (recentDate.getTime() > sevenDaysAgoDate.getTime()) {
          this.recents.push({
            ...recent,
            count: recentCount
          });
          recentCount++;
        }
      });
    }

    // save the values to localStorage and overwrite any older ones
    localStorage.setItem(
      'chessieChooChooRecents',
      JSON.stringify(this.recents)
    );
  }

  back() {
    this.router.navigateByUrl('/landing-page');
  }

  goToBookmarksPage(recent: any) {
    this.router.navigateByUrl(recent.link);
  }

  deleteRecent(count: number) {
    this.recents.splice(count, 1);
    let recentCount = 0;
    this.recents.forEach(recent => {
      recent.count = recentCount;
      recentCount++;
    });
    localStorage.setItem(
      'chessieChooChooRecents',
      JSON.stringify(this.recents)
    );
  }
}
