import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountsapiService } from './accountsapi.service';

describe('AccountsapiService', () => {
  let service: AccountsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      providers: [AccountsapiService]
    });
    service = TestBed.inject(AccountsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
