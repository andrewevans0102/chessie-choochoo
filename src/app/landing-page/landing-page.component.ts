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
  constructor(public router: Router) {}

  ngOnInit() {}

  goToHomePage() {
    this.router.navigateByUrl('/home');
  }

  goToRecentsPage() {
    this.router.navigateByUrl('/recents-page');
  }
}
