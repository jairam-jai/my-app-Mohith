import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyloginComponent } from './companylogin.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanyloginService } from '../companylogin.service';

describe('CompanyloginComponent', () => {
  let component: CompanyloginComponent;
  let fixture: ComponentFixture<CompanyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyloginComponent ],
      imports: [ ReactiveFormsModule,HttpClientTestingModule ],
      providers: [CompanyloginService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
