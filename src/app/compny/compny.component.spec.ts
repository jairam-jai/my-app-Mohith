import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnyComponent } from './compny.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanyService } from '../company.service';
import { FormsModule } from '@angular/forms';

describe('CompnyComponent', () => {
  let component: CompnyComponent;
  let fixture: ComponentFixture<CompnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnyComponent ],
         imports: [HttpClientTestingModule,FormsModule],
      providers: [CompanyService]
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
