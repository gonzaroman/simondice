import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private router = inject(Router);
  public userNameService = inject(UsernameService);
  userName: String = this.userNameService.namePlayer;

  goUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
