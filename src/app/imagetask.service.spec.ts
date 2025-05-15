import { TestBed } from '@angular/core/testing';

import { ImagetaskService } from './imagetask.service';

describe('ImagetaskService', () => {
  let service: ImagetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
