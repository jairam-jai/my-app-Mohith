import { TestBed } from '@angular/core/testing';

import { AccountsapiService } from './accountsapi.service';

describe('AccountsapiService', () => {
  let service: AccountsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
