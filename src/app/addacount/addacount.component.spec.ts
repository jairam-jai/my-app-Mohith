import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacountComponent } from './addacount.component';

describe('AddacountComponent', () => {
  let component: AddacountComponent;
  let fixture: ComponentFixture<AddacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddacountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
