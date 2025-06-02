import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDataComponent } from './employe-data.component';
import { FormsModule } from '@angular/forms';

describe('EmployeDataComponent', () => {
  let component: EmployeDataComponent;
  let fixture: ComponentFixture<EmployeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDataComponent ],
       imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
