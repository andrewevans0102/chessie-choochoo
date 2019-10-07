import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {
  stationCode: string;
  lineCode: string;
  metroLine: string;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.stationCode = this.route.snapshot.paramMap.get('StationCode');
    this.lineCode = this.route.snapshot.paramMap.get('LineCode');
    this.metroLine = this.getLineBackgroundColor(this.lineCode);
  }

  getLineBackgroundColor(color: string) {
    let backgroundColor = '';
    switch (color) {
      case 'RD':
        backgroundColor = 'red';
        break;
      case 'BL':
        backgroundColor = 'blue';
        break;
      case 'YL':
        backgroundColor = 'yellow';
        break;
      case 'OR':
        backgroundColor = 'orange';
        break;
      case 'GR':
        backgroundColor = 'green';
        break;
      case 'SV':
        backgroundColor = 'silver';
        break;
      default:
        backgroundColor = 'silver';
        break;
    }
    return backgroundColor;
  }

  back() {
    this.router.navigateByUrl('/home');
  }
}
