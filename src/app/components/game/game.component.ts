import { Component, inject } from '@angular/core';
import { ScoreComponent } from '../score/score.component';
import { CommonModule } from '@angular/common';
import { ScoresService } from '../../services/scores.service';

type Color = 'green' | 'red' | 'yellow' | 'blue';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ScoreComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  scores: Array<number> = [];

  public scoresService = inject(ScoresService);

  constructor() {}

  //scores = this.scoresService.scores ;

  boardColors: Color[] = ['green', 'red', 'yellow', 'blue'];

  sequence: Color[] = [];
  userStep = 0;
  round = 0;
  isPlaying = false;

  // Color actualmente iluminado
  activeColor: Color | null = null;

  startGame() {
    this.sequence = [];
    this.round = 1;
    this.nextRound();
  }

  nextRound() {
    this.isPlaying = true;
    this.userStep = 0;
    // Añadir un color aleatorio a la secuencia
    this.sequence.push(this.getRandomColor());
    // Reproducir la secuencia actual
    this.playSequence();
  }

  getRandomColor(): Color {
    const index = Math.floor(Math.random() * this.boardColors.length);
    return this.boardColors[index];
  }

  playSequence() {
    const delay = 500;
    this.sequence.forEach((color, i) => {
      setTimeout(() => this.highlight(color), delay * (i + 1));
    });
    // Después de mostrar todos, permitir clicks de usuario
    setTimeout(
      () => {
        this.isPlaying = false;
      },
      delay * (this.sequence.length + 1),
    );
  }

  highlight(color: Color) {
    this.activeColor = color;
    setTimeout(() => (this.activeColor = null), 400);
  }

  onColorClick(color: Color) {
    if (this.isPlaying) return;

    this.highlight(color);
    if (color === this.sequence[this.userStep]) {
      this.userStep++;
      if (this.userStep === this.sequence.length) {
        this.round++;
        setTimeout(() => this.nextRound(), 1000);
      }
    } else {
      alert(`¡You failed on round ${this.round}!`);
      this.isPlaying = false;
      this.addScore(this.round);
    }
  }

  addScore(p: number) {
    this.scores.push(p);
    this.scoresService.addScore(p);
  }
}
