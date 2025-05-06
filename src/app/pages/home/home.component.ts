import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // inyectamos el Router aquí
  private router = inject(Router);
  

  goUrl( url : string) {
    this.router.navigateByUrl(url);
  }
}
