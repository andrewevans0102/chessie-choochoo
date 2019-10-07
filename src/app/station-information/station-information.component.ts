import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetroService } from '../services/metro.service';

@Component({
  selector: 'app-station-information',
  templateUrl: './station-information.component.html',
  styleUrls: ['./station-information.component.scss']
})
export class StationInformationComponent implements OnInit {
  stationCode: string;
  lineCode: string;
  stationInformation: any;
  stationTimes: any;
  stationHours: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private metroService: MetroService
  ) {}

  ngOnInit() {
    this.stationCode = this.route.snapshot.paramMap.get('StationCode');
    this.lineCode = this.route.snapshot.paramMap.get('LineCode');
    this.loadInitialStationInformation();
  }

  async loadInitialStationInformation() {
    try {
      this.stationInformation = await this.metroService.getStationInformation(
        this.stationCode
      );
      this.stationHours = await this.metroService.getStationHours(
        this.stationCode
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  back() {
    this.router.navigateByUrl('/home');
  }
}
