import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from '../weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
          imports: [
      HttpClientTestingModule,  
    ],
   providers: [
      WeatherService,
    ]

    }).compileComponents();
  });

  beforeEach(() => {
  fixture = TestBed.createComponent(WeatherComponent);
  component = fixture.componentInstance;

  // Mock the full expected structure so template binding doesn't fail
  component.weatherdata = {
    time: '2025-05-29 14:00',
    current_weather: {
      temperature: 25,
      windspeed: 10,
      winddirection: 180,
      is_day: 1
    },
    current_weather_units: {
      temperature: '°C',
      windspeed: 'km/h',
      winddirection: '°'
    }
  };

  fixture.detectChanges();
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
