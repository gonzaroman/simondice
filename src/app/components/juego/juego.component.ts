import { Component } from '@angular/core';

type Color = 'green' | 'red' | 'yellow' | 'blue';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss'
})
export class JuegoComponent {
  boardColors: Color[] = ['green', 'red', 'yellow', 'blue'];

  sequence: Color[] = [];
  userStep = 0;
  round = 0;
  isPlaying = false;

  // para aplicar clases de iluminación
  activeColor: Color | null = null;

  startGame() {
    this.sequence = [];
    this.round = 1;
    this.nextRound();
  }

  nextRound() {
    this.isPlaying = true;
    this.userStep = 0;
    // agregar un nuevo color aleatorio
    this.sequence.push(this.randomColor());
    // reproducir la secuencia
    this.playSequence();
  }

  randomColor(): Color {
    const idx = Math.floor(Math.random() * this.boardColors.length);
    return this.boardColors[idx];
  }

  playSequence() {
    let delay = 500;
    this.sequence.forEach((color, i) => {
      setTimeout(() => this.light(color), delay * (i + 1));
    });
    // al final permitir interacción
    setTimeout(() => {
      this.isPlaying = false;
    }, delay * (this.sequence.length + 1));
  }

  light(color: Color) {
    this.activeColor = color;
    // mantener iluminado brevemente
    setTimeout(() => this.activeColor = null, 400);
  }

  onUserClick(color: Color) {
    if (this.isPlaying) return; // bloquear clicks durante reproducción

    this.light(color);
    if (color === this.sequence[this.userStep]) {
      this.userStep++;
      // completó la secuencia del round
      if (this.userStep === this.sequence.length) {
        this.round++;
        setTimeout(() => this.nextRound(), 1000);
      }
    } else {
      // error: reiniciar o mostrar mensaje
      alert(`¡Fallaste! Llegaste al paso ${this.userStep + 1}`);
      this.isPlaying = false;
    }
  }

}




