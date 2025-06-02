import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddcompanyComponent } from './addcompany.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanyService } from '../company.service';

describe('AddcompanyComponent', () => {
  let component: AddcompanyComponent;
  let fixture: ComponentFixture<AddcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientTestingModule], 
      declarations: [AddcompanyComponent],
      providers: [CompanyService]

    }).compileComponents();

    fixture = TestBed.createComponent(AddcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
