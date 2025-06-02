import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordComponent } from './dashbord.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashbordComponent', () => {
  let component: DashbordComponent;
  let fixture: ComponentFixture<DashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordComponent ],
        imports: [RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
