import { TestBed } from '@angular/core/testing';

import { UsetokenInterceptor } from './usetoken.interceptor';

describe('UsetokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UsetokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UsetokenInterceptor = TestBed.inject(UsetokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
