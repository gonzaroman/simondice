import { Component } from '@angular/core';

type Color = 'verde' | 'rojo' | 'amarillo' | 'azul';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent {
  coloresTablero: Color[] = ['verde', 'rojo', 'amarillo', 'azul'];

  secuencia: Color[] = [];
  pasoUsuario = 0;
  ronda = 0;
  estaReproduciendo = false;

  // Color actualmente iluminado
  colorActivo: Color | null = null;

  iniciarJuego() {
    this.secuencia = [];
    this.ronda = 1;
    this.proximaRonda();
  }

  proximaRonda() {
    this.estaReproduciendo = true;
    this.pasoUsuario = 0;
    // Añadir un color aleatorio a la secuencia
    this.secuencia.push(this.colorAleatorio());
    // Reproducir la secuencia actual
    this.reproducirSecuencia();
  }

  colorAleatorio(): Color {
    const indice = Math.floor(Math.random() * this.coloresTablero.length);
    return this.coloresTablero[indice];
  }

  reproducirSecuencia() {
    const retraso = 500;
    this.secuencia.forEach((color, i) => {
      setTimeout(() => this.iluminar(color), retraso * (i + 1));
    });
    // Después de mostrar todos, permitir clicks de usuario
    setTimeout(() => {
      this.estaReproduciendo = false;
    }, retraso * (this.secuencia.length + 1));
  }

  iluminar(color: Color) {
    this.colorActivo = color;
    setTimeout(() => this.colorActivo = null, 400);
  }

  alHacerClick(color: Color) {
    if (this.estaReproduciendo) return;

    this.iluminar(color);
    if (color === this.secuencia[this.pasoUsuario]) {
      this.pasoUsuario++;
      if (this.pasoUsuario === this.secuencia.length) {
        this.ronda++;
        setTimeout(() => this.proximaRonda(), 1000);
      }
    } else {
      alert(`¡Fallaste en el paso ${this.pasoUsuario + 1}!`);
      this.estaReproduciendo = false;
    }
  }
}