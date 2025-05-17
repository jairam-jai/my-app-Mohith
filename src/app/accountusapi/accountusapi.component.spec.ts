import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountusapiComponent } from './accountusapi.component';

describe('AccountusapiComponent', () => {
  let component: AccountusapiComponent;
  let fixture: ComponentFixture<AccountusapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountusapiComponent ]
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
