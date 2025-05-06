import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { GameComponent } from './components/game/game.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScorepageComponent } from './pages/scorepage/scorepage.component';
import { RulespageComponent } from './pages/rulespage/rulespage.component';
import { PagenotfoundcomponentComponent } from './pages/pagenotfoundcomponent/pagenotfoundcomponent.component';
import { GamepageComponent } from './pages/gamepage/gamepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'game', component: GamepageComponent},
    { path:'score', component: ScorepageComponent},
    { path:'rules', component: RulespageComponent},
    { path:'about', component: AboutpageComponent},
    { path:'**', component:  PagenotfoundcomponentComponent}


];
