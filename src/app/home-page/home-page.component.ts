import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MetroService } from '../services/metro.service';
import { MetroLine } from '../models/metro-line/metro-line';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  metroLines: MetroLine[] = [
    { abbv: 'RD', name: 'Red' },
    { abbv: 'BL', name: 'Blue' },
    { abbv: 'YL', name: 'Yellow' },
    { abbv: 'OR', name: 'Orange' },
    { abbv: 'GR', name: 'Green' },
    { abbv: 'SV', name: 'Silver' }
  ];
  selectedLine: string;
  standardRoute = [];
  selectedCode: string;
  stationList: any;
  arrivalTimes = [];
  metroLine: string;

  constructor(private router: Router, private metroService: MetroService) {}

  async loadInformation(lineCode: string) {
    try {
      this.standardRoute = [];
      this.stationList = [];
      this.standardRoute = await this.metroService.getStationRoute(lineCode);
      this.stationList = await this.metroService.getStationList(lineCode);
      this.selectedCode = undefined;
    } catch (error) {
      alert(error);
    }
  }

  getArrivalTime(route: any) {
    this.router.navigateByUrl(
      `/station-information/${this.selectedLine}/${route.code}`
    );
  }

  async showTimes(event: any) {
    const recentStorage = JSON.parse(
      localStorage.getItem('chessieChooChooRecents')
    );
    const station = await this.metroService.getStationInformation(
      this.selectedCode
    );
    recentStorage.push({
      recorded: Date.now(),
      link: `/bookmarks-page/${this.selectedLine}/${this.selectedCode}`,
      metroLine: this.metroService.getLineByCode(this.selectedLine),
      stationName: station.Name
    });
    localStorage.setItem(
      'chessieChooChooRecents',
      JSON.stringify(recentStorage)
    );
  }

  async updateLine(event: any) {
    this.loadInformation(this.selectedLine);
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
    this.router.navigateByUrl('/landing-page');
  }
}
