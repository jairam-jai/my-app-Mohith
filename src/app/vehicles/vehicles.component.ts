import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  constructor(private _vehicleService:VehiclesService) {
    this.relode();
  }
   
  relode() {
  this._vehicleService.getvehicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Server Error!")
    })
}
  keyword:any='';
  search() {
    this._vehicleService.flitervehicles(this.keyword).subscribe((datafilter:any)=>{
   this.vehicles=datafilter
    },(err:any)=>{
      alert("Internal Server Error!")
    })

  }

  column:any='';
  order:any='';
  sort() {
    this._vehicleService.sortvehicles(this.column,this.order).subscribe((datasort:any)=>{
      this.vehicles=datasort
      console.log(datasort);
      // alert(this.vehicles)
    },(err:any)=>{
      alert("Internal Server Error!")
    })
  }

  // paginaction
  limit:number=0;
  page:number=0;
  pagenaction() {
    this._vehicleService.pagenactionvehicles(this.limit,this.page).subscribe((data:any)=>{
      this.vehicles=data
    },(err:any)=>{
      alert("Internal Server Error");
    })
  
  }

  
  delete(id:number) {

    if(confirm("Are you sure to delete")==true) {
 this._vehicleService.deleteVechicle(id).subscribe((data:any)=>{
  alert("Record delete successfully")
  this.relode();
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
  } else {
    alert('You have cancelled delete');

  }
    }

   
}
