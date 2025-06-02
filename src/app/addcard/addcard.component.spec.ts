import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcardComponent } from './addcard.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentCartService } from '../student-cart.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddcardComponent', () => {
  let component: AddcardComponent;
  let fixture: ComponentFixture<AddcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcardComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        {
          StudentCartService,
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }) // ✅ Mock params observable
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
