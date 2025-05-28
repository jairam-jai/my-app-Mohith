import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnyComponent } from './compny.component';

describe('CompnyComponent', () => {
  let component: CompnyComponent;
  let fixture: ComponentFixture<CompnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
