import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddacountComponent } from './addacount.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddacountComponent', () => {
  let component: AddacountComponent;
  let fixture: ComponentFixture<AddacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ AddacountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
