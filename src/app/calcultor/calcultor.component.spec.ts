import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { CalcultorComponent } from './calcultor.component';

describe('CalcultorComponent', () => {
  let component: CalcultorComponent;
  let fixture: ComponentFixture<CalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcultorComponent ],
       imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
