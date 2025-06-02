import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountusapiComponent } from './accountusapi.component';
import { FormsModule } from '@angular/forms';

describe('AccountusapiComponent', () => {
  let component: AccountusapiComponent;
  let fixture: ComponentFixture<AccountusapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountusapiComponent ],
      imports: [ HttpClientTestingModule, FormsModule ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountusapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
