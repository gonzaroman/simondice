import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nameuserGuard } from './nameuser.guard';

describe('nameuserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => nameuserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
