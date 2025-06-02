import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { CompanyloginService } from './companylogin.service';


describe('CompanyloginService', () => {
  let service: CompanyloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({     
      imports: [HttpClientTestingModule], // <-- This is essential
      providers: [LoginService]
});
    service = TestBed.inject(CompanyloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
