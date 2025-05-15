import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
constructor(private _vehicleservice:VehiclesService) {}

  public vechicleform:FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),

    
  })
  submit() { 
    console.log(this.vechicleform.value);
    this._vehicleservice.createvehicle(this.vechicleform.value).subscribe((data:any)=>{
      console.log(data);
      alert("Vehicle Created Sussessfully😀");
    }, (err:any)=> {
      alert('internal Server Error!');
    })

  }

}
