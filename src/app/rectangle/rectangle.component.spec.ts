import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RectangleComponent } from './rectangle.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

describe('RectangleComponent', () => {
  let component: RectangleComponent;
  let fixture: ComponentFixture<RectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleComponent ],
      imports: [ FormsModule ]  // Add FormsModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
