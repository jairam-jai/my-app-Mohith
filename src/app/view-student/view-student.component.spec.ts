import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewStudentComponent } from './view-student.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { StudentCartService } from '../student-cart.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewStudentComponent],
      imports: [HttpClientTestingModule], 
      providers: [StudentCartService,
        {
        provide: ActivatedRoute,
        
        useValue: {
          params: of({ id: 123 }),
          paramMap: of({ 
            get: (key: string) => 'mocked-id',  // example if you get route params
          }),
          snapshot: {
            paramMap: {
              get: (key: string) => 'mocked-id'
            }

          }
        }
      }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
