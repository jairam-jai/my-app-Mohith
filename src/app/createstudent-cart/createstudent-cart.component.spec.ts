import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentCartComponent } from './createstudent-cart.component';

describe('CreatestudentCartComponent', () => {
  let component: CreatestudentCartComponent;
  let fixture: ComponentFixture<CreatestudentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestudentCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatestudentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
