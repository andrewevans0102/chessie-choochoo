import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MetroService } from '../services/metro.service';
import { takeUntil, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-arrival-times',
  templateUrl: './arrival-times.component.html',
  styleUrls: ['./arrival-times.component.scss']
})
export class ArrivalTimesComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:variable-name
  private _selectedCode: string;
  arrivalTimes = [];
  metroLine: string;
  arrivalTimesAsObservable: Observable<any>;
  arrivalTimesAsSubscription: any;
  private unsubscribe$ = new Subject<void>();

  @Input()
  set selectedCode(selectedCode: string) {
    this._selectedCode = selectedCode;
    this.loadSelectedArrivalTimes();
  }

  @Input()
  lineCode: string;

  constructor(private metroService: MetroService) {}

  ngOnInit() {
    this.metroLine = this.getLineBackgroundColor(this.lineCode);
    this.metroLine.toUpperCase();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadSelectedArrivalTimes() {
    if (this._selectedCode !== undefined) {
      this.arrivalTimes = await this.metroService.getArrivalTimes(
        this._selectedCode
      );
    }

    if (this.arrivalTimesAsSubscription !== undefined) {
      this.arrivalTimesAsSubscription.unsubscribe();
    }

    this.arrivalTimesAsObservable = interval(10000);
    this.arrivalTimesAsSubscription = this.arrivalTimesAsObservable
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError(error => {
          throw error;
        })
      )
      .subscribe(async () => {
        this.arrivalTimes = [];
        if (this._selectedCode !== undefined) {
          this.loadSelectedArrivalTimes();
        }
      });
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
}
