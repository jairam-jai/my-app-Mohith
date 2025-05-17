import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
constructor(private _vehicleservice:VehiclesService,private _routerlink:Router) {}

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
      this._routerlink.navigateByUrl('/dashbord/vehicles')
    }, (err:any)=> {
      alert('internal Server Error!');
    })

  }

}
