import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ScorepageComponent } from './pages/scorepage/scorepage.component';
import { RulespageComponent } from './pages/rulespage/rulespage.component';
import { PagenotfoundcomponentComponent } from './pages/pagenotfoundcomponent/pagenotfoundcomponent.component';
import { GamepageComponent } from './pages/gamepage/gamepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { nameuserGuard } from './guards/nameuser.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GamepageComponent, canActivate: [nameuserGuard] },
  {
    path: 'score',
    component: ScorepageComponent,
    canActivate: [nameuserGuard],
  },
  {
    path: 'rules',
    component: RulespageComponent,
    canActivate: [nameuserGuard],
  },
  {
    path: 'about',
    component: AboutpageComponent,
    title: 'Acerca de',
    canActivate: [nameuserGuard],
  },
  { path: 'juego', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', component: PagenotfoundcomponentComponent },
];
