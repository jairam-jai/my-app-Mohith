import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompanyComponent } from './viewcompany.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewcompanyComponent', () => {
  let component: ViewcompanyComponent;
  let fixture: ComponentFixture<ViewcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompanyComponent ],
        imports: [
      HttpClientTestingModule,  
    ],
       providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '123' }),
          snapshot: {
            paramMap: {
              get: (key: string) => '123',
            }
          }
        }
      }
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
