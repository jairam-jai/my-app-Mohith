import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // <-- Add this
import { CreatevehicleComponent } from './createvehicle.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreatevehicleComponent', () => {
  let component: CreatevehicleComponent;
  let fixture: ComponentFixture<CreatevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatevehicleComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule] ,
 providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }) ,
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') return '123';
                return null;
              }
            }),
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'id') return '123';
                  return null;
                }
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CreatevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
