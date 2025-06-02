import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentCartService } from './student-cart.service';

describe('StudentCartService', () => {
  let service: StudentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({      
    imports: [HttpClientTestingModule],
    providers: [StudentCartService]
});
    service = TestBed.inject(StudentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
