import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlipcartService } from './flipcart.service';

describe('FlipcartService', () => {
  let service: FlipcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // ✅ Provides HttpClient
      providers: [FlipcartService]
    });

    service = TestBed.inject(FlipcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
