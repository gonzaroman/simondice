import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsernameService } from '../services/username.service';

export const nameuserGuard: CanActivateFn = (route, state) => {
  const userService = inject(UsernameService);

  const nameUser = userService.getNamePlayer();

  if (!nameUser) {
    return false;
  }

  return true;
};
