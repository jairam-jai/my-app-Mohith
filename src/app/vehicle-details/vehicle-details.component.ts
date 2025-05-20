import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  id:any='';
  vehicle:any={};
constructor(private _activatedrouter:ActivatedRoute, private _vehicleService:VehiclesService){
  _activatedrouter.params.subscribe(
    (data:any)=>{

      console.log(data.id);
      this.id=data.id
    },(err:any)=>{
alert("Internal Server Error!");
    })
  _vehicleService.getvehicle(this.id).subscribe((data:any)=>{
    console.log(data);
    this.vehicle=data
  },(err:any)=>{
    alert("Internal Server Error!");
  })


}
}
