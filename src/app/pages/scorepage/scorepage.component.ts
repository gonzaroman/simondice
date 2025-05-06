import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from "../../components/score/score.component";

@Component({
  selector: 'app-scorepage',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, ScoreComponent],
  templateUrl: './scorepage.component.html',
  styleUrl: './scorepage.component.scss'
})
export class ScorepageComponent {

}
