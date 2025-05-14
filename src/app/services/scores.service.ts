import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  scores: Array<number> = [];

  constructor() {}

  addScore(p: number) {
    this.scores.push(p);
    this.scores.sort((a, b) => b - a);

    if (this.scores.length > 5) {
      this.scores.splice(5);
    }

    const menorNumero = this.scores[this.scores.length - 1];
  }
}
