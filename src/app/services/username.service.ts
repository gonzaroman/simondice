import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  namePlayer: string = '';

  constructor() {}

  saveNamePlayer(name: string | null) {
    this.namePlayer = name ?? '';
  }

  getNamePlayer(): string {
    return this.namePlayer;
  }
}
