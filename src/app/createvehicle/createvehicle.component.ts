import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  id:any='';
constructor(private _vehicleservice:VehiclesService,private _routerlink:Router, private _activedrouter:ActivatedRoute) {
  _activedrouter.params.subscribe((data:any)=>{
    console.log(data.id);
    this.id=data.id;
    if(this.id){
        _vehicleservice.getvehicle(data.id).subscribe((data:any)=>{
console.log(data);
this.vechicleform.patchValue(data);
    },(err:any)=>{
      alert("Unable to fetch vehicle data")
    })
    }
  })
}
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
if(this.id){

  this._vehicleservice.updatevehicle(this.id,this.vechicleform.value).subscribe((data:any)=>{
console.log(data);
alert("Vehicle record update Successfully😍")
this._routerlink.navigateByUrl("/dashbord/vehicles");
  },(err:any)=>{
    alert('Unable to update😒')
  })

}else{
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

}
