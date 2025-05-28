import { TestBed } from '@angular/core/testing';

import { AuthenticationcompanyGuard } from './authenticationcompany.guard';

describe('AuthenticationcompanyGuard', () => {
  let guard: AuthenticationcompanyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationcompanyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
