import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetaskComponent } from './imagetask.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImagetaskService } from '../imagetask.service';

describe('ImagetaskComponent', () => {
  let component: ImagetaskComponent;
  let fixture: ComponentFixture<ImagetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagetaskComponent ],
      imports: [HttpClientTestingModule], // ✅ Required for HttpClient
      providers: [ImagetaskService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
