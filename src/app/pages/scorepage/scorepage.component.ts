import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from '../../components/score/score.component';
import { ScoresService } from '../../services/scores.service';

@Component({
  selector: 'app-scorepage',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './scorepage.component.html',
  styleUrl: './scorepage.component.scss',
})
export class ScorepageComponent {
  public scoresService = inject(ScoresService);

  scores = this.scoresService.scores;
}
