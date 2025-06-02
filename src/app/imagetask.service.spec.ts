import { TestBed } from '@angular/core/testing';

import { ImagetaskService } from './imagetask.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImagetaskService', () => {
  let service: ImagetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [HttpClientTestingModule],
      providers: [ImagetaskService]});
    service = TestBed.inject(ImagetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
