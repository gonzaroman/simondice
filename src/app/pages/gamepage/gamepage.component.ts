import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameComponent } from '../../components/game/game.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gamepage',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, GameComponent],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss',
})
export class GamepageComponent {}
