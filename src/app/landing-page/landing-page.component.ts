import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetroLine } from '../models/metro-line/metro-line';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  metroLines: MetroLine[] = [
    { abbv: 'RD', name: 'Red' },
    { abbv: 'BL', name: 'Blue' },
    { abbv: 'YL', name: 'Yellow' },
    { abbv: 'OR', name: 'Orange' },
    { abbv: 'GR', name: 'Green' },
    { abbv: 'SV', name: 'Silver' }
  ];
  selectedLine: string;

  constructor(public router: Router) {}

  ngOnInit() {}

  goToHomePage() {
    if (this.selectedLine === undefined) {
      alert('please select a metro line');
      return;
    }

    this.router.navigateByUrl('/home/' + this.selectedLine);
  }

  goToRecentsPage() {
    this.router.navigateByUrl('/recents-page');
  }

  goToMapPage() {
    this.router.navigateByUrl('/map-page');
  }

  goToWMATATwitter() {
    window.open('https://twitter.com/wmata', '_blank');
  }
}
