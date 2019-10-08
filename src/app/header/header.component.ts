import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToLandingPage() {
    this.router.navigateByUrl('/landing-page');
  }

  goToMapPage() {
    this.router.navigateByUrl('/map-page');
  }
}
