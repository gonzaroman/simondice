import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuegoComponent } from "./components/juego/juego.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JuegoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simondice';
}
