import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('/landing-page');
  }
}
