import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreatestudentCartComponent } from './createstudent-cart.component';
import { StudentCartService } from '../student-cart.service';
import { FormsModule } from '@angular/forms';

describe('CreatestudentCartComponent', () => {
  let component: CreatestudentCartComponent;
  let fixture: ComponentFixture<CreatestudentCartComponent>;
  //   imports: [
  //   FormsModule
  // ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestudentCartComponent ],
      providers: [StudentCartService] ,
      imports: [HttpClientTestingModule,FormsModule],    
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
