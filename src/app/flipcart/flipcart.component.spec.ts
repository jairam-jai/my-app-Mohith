import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcartComponent } from './flipcart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlipcartComponent', () => {
  let component: FlipcartComponent;
  let fixture: ComponentFixture<FlipcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipcartComponent ],
      imports: [
      HttpClientTestingModule  // <-- Add this
    ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
