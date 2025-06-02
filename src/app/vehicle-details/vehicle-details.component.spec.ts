import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock params or snapshot as needed by your component
            params: of({ id: '123' }),   // example: observable of route params
            snapshot: {
              paramMap: {
                get: (key: string) => '123'  // example snapshot param getter
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
