import { TestBed } from '@angular/core/testing';

import { StudentCartService } from './student-cart.service';

describe('StudentCartService', () => {
  let service: StudentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
