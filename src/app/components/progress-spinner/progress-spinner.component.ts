import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval } from 'rxjs';
import { takeWhile, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercente = 0;
  public queryMode: ProgressBarMode = 'query';
  public queryValue = 0;

  constructor() { }

  ngOnInit() {
    this.loadingProgress(200).subscribe(i => this.loadingPercente = i);

    concat(
      interval(3000).pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
      this.loadingProgress(500)
    ).subscribe(i => this.queryValue = i)

  }

  loadingProgress(speed: number) {
    // O interval vai contar até o valor do speed definido em ngOnit, usando o pipe com operador map pode se chegar o valor mais rápido possivel
    return interval(speed)
      .pipe(
        map(i => i * 5),
        takeWhile(i => i <= 100)
      )
  }
}
