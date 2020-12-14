import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den aktuellen und den finalen Punktestand zu ermitteln...
     */

    /******************************/

    this.score$.pipe(
      scan((x, y) => x + y)
    ).subscribe(score => this.currentScore = score);

    // Hands on:
    // 1. multipliere den Score mal 10
    // 2. filtere alle Werte aus, die größer gleich 500 sind
    // 3. bilde die Summe (einmal)
    // 4. Knobelaufgabe: Zeige so viele 💩 an, wie Zahl groß war
    this.score$.pipe(
      reduce((x, y) => x + y) // 3.
    ).subscribe(score => this.finalScore = score);


    /******************************/

    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
