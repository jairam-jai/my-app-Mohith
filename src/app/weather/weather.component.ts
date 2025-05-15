import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherdata:any=[];
  constructor(private _weatherService:WeatherService) {
      
    _weatherService.getweather().subscribe((data:any)=>{
      console.log(_weatherService);
      this.weatherdata=data;
      console.log(this.weatherdata);
    })
  }

}
